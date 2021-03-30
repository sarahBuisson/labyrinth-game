package fr.perso.labyrinth.labeat

import fr.perso.labyrinth.toolbox.algorithm.dataMap.distanceMap
import fr.perso.labyrinth.freezone.model.*
import fr.perso.labyrinth.labeat.model.*
import fr.perso.labyrinth.toolbox.model.*
import mu.KotlinLogging
import org.jeasy.rules.api.Action
import org.jeasy.rules.api.Rules
import org.jeasy.rules.core.DefaultRule
import org.jeasy.rules.core.DefaultRulesEngine
import kotlin.js.JsExport
import kotlinx.serialization.*
@Serializable
enum class InteractionResult { Success, Failure, NothingHappen }

@Serializable
class Interaction<Qui, Quoi, Comment, Univers>(
    val qui: Qui,
    var quoi: Quoi,
    val comment: Comment,
    val univers: Univers
) {

    val messages: MutableList<String> = mutableListOf();
    var result: InteractionResult = InteractionResult.NothingHappen;
}

abstract class MoveRule(
    evaluateL: (Interaction<Player, Any, Any, Partie<*>>) -> kotlin.Boolean,
    executeL: (Interaction<Player, Any, Any, Partie<*>>) -> kotlin.Unit = {}
) :
    DefaultRule<Interaction<Player, Any, Any, Partie<*>>>(condition = { interaction ->

        interaction.quoi is DoorObjectZone
                && interaction.qui.location.content.contains(interaction.quoi)
                && evaluateL(interaction)

    },
        actions = listOf<Action<Interaction<Player, Any, Any, Partie<*>>>>(
            object : Action<Interaction<Player, Any, Any, Partie<*>>> {
                override fun execute(interaction: Interaction<Player, Any, Any, Partie<*>>) {
                    val doorObjectZone = interaction.quoi as DoorObjectZone

                    if (interaction.qui is ObjectZone && interaction.qui.location.content.contains(interaction.qui)) {
                        interaction.qui.location.content.remove(interaction.qui)
                        (doorObjectZone.destination as GeoZone).content.add(interaction.qui)
                    }
                    interaction.qui.location = doorObjectZone.destination as CompositeZone
                    interaction.qui.numberOfSteps++
                    interaction.messages.add("move to room")
                    interaction.result = InteractionResult.Success;
                    executeL(interaction)
                }
            }
        ))


class ChangeDirectionToZoneRule :
    DefaultRule<Interaction<Player, Any, Any, Partie<*>>>(
        condition = { interaction ->

            (interaction.quoi is Direction) && (interaction.univers.player.location as CompositeZone).connections.containsKey(
                interaction.quoi
            )
        },
        action = { interaction ->
            interaction.quoi =
                (interaction.univers.player.location as CompositeZone).getDoorAt(interaction.quoi as Direction)!!
        }) {
    override var name: String = "ChangeDirectionToZoneRule"
}


class MoveOpenDoorRule :
    MoveRule(
        { interaction ->
            (interaction.quoi as DoorObjectZone).key == null
        }) {
    override var name: String = "MoveOpenDoorRule"
}

class MoveClosedDoorRule :
    MoveRule(
        { interaction ->
            if ((interaction.quoi as DoorObjectZone).key != null)
                interaction.messages.add("door need" + (interaction.quoi as DoorObjectZone).key)
            ((interaction.quoi as DoorObjectZone).key != null) && interaction.qui.inventory.contains((interaction.quoi as DoorObjectZone).key)
        },
        { interaction ->
            val doorObjectZone = interaction.quoi as DoorObjectZone
            interaction.qui.inventory.remove(doorObjectZone.key);
            doorObjectZone.key = null;
            interaction.messages.add("open door with key " + doorObjectZone.key?.name ?: "")
            interaction.result = InteractionResult.Success;
        }) {
    override var name: String = "MoveClosedDoorRule"
}


class TakeObjectRule :
    DefaultRule<Interaction<Player, Any, Any, Partie<*>>>(
        condition =
        { interaction ->
            interaction.quoi is ObjectZone
                    && !(interaction.quoi is DoorObjectZone)
                    && !(interaction.quoi is Player)
                    && interaction.qui.location.content.contains(interaction.quoi)
        },
        actions = listOf<Action<Interaction<Player, Any, Any, Partie<*>>>>(
            object : Action<Interaction<Player, Any, Any, Partie<*>>> {
                override fun execute(interaction: Interaction<Player, Any, Any, Partie<*>>) {
                    val obj = interaction.quoi as ObjectZone
                    interaction.qui.location.content.remove(obj)
                    interaction.qui.inventory.add(obj)
                    if (obj.name === "exit") {
                        interaction.univers.status = PartieStatus.WIN
                        interaction.messages.add("you exited the lab ")
                        interaction.result = InteractionResult.Success;

                    } else {
                        interaction.messages.add("you find a " + (obj.type ?: "") + " " + obj.name)
                        interaction.result = InteractionResult.Success;
                    }
                }
            }
        )) {
    override var name: String = "TakeObjectRule"
}


val ruleBook = Rules(
    ChangeDirectionToZoneRule(),
    MoveOpenDoorRule(), MoveClosedDoorRule(), TakeObjectRule()
)

@JsExport
fun playerInteractWith(partie: Partie<*>, obj: ObjectZone): Interaction<*, *, *, *> {
    val interaction = Interaction(partie.player, obj as Any, "" as Any, partie)
    try {

        val defaultRulesEngine = DefaultRulesEngine<Interaction<Player, Any, Any, Partie<*>>>(

        )
        defaultRulesEngine.fire(
            ruleBook,
            interaction
        )
        partie.messages.addAll(interaction.messages)
    } catch (e: Exception) {
        println(e)
        println(e.cause)
    }
    return interaction

}

@JsExport
fun playerInteractWithJson(partie: Partie<*>, obj: String): Interaction<*, *, *, *> {
    val interaction = Interaction(partie.player, deserialize(obj, partie), "" as Any, partie)
    try {

        val defaultRulesEngine = DefaultRulesEngine<Interaction<Player, Any, Any, Partie<*>>>(

        )
        defaultRulesEngine.fire(
            ruleBook,
            interaction
        )
        partie.messages.addAll(interaction.messages)
    } catch (e: Exception) {
        println(e)
        println(e.cause)
    }
    return interaction

}

@JsExport
fun computePartieScore(partie: Partie<*>): MutableMap<String, Int> {

    val datas: MutableMap<String, Int> = HashMap()
    if (partie.level is LevelBoard<*>) {
        val level = partie.level as LevelBoard<ConnectedZone>
        val numberOfCulDeSac = level.toList().count { it.connected.size == 1 }
        datas.put("numberOfCulDeSac", numberOfCulDeSac)
        val solutionLength = distanceMap(level.start as BoardZone, level as Board<BoardZone>).get(level.exit)!!
        datas.put("solutionLength", solutionLength)
        datas.put("size", level.height)
        datas.put("numberOfSteps", partie.player.numberOfSteps)
        datas.put("numberOfRooms", partie.level.width * level.height)
        datas.put(
            "score",
            (level.width * level.height * solutionLength * numberOfCulDeSac / (partie.player.numberOfSteps + 1))
        )
    }
    return datas;

}


private val LOGGER = KotlinLogging.logger {}
