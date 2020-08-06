package fr.perso.labyrinth.labeat

import fr.perso.labyrinth.toolbox.model.ConnectedZone
import fr.perso.labyrinth.toolbox.model.GeoZone
import fr.perso.labyrinth.toolbox.model.Board
import fr.perso.labyrinth.toolbox.model.BoardZone
import fr.perso.labyrinth.toolbox.algorithm.dataMap.distanceMap
import fr.perso.labyrinth.freezone.model.*
import fr.perso.labyrinth.labeat.model.LevelBoard
import fr.perso.labyrinth.labeat.model.Partie
import fr.perso.labyrinth.labeat.model.PartieStatus
import fr.perso.labyrinth.labeat.model.Player
import mu.KotlinLogging
import org.jeasy.rules.core.RulesImpl
import org.jeasy.rules.core.DefaultRulesEngine
import org.jeasy.rules.core.LambdaRule



class Interaction<Qui, Quoi, Comment, Univers>(val qui: Qui, val quoi: Quoi, val comment: Comment, val univers: Univers)


abstract class MoveRule(evaluateL: (Interaction<Player, Any, Any, Partie<*>>) -> kotlin.Boolean, executeL: (Interaction<Player, Any, Any, Partie<*>>) -> kotlin.Unit = {}) :
        LambdaRule<Interaction<Player, Any, Any, Partie<*>>>(
                { interaction ->
                    interaction.quoi is DoorObjectZone
                            && interaction.qui.location.content.contains(interaction.quoi)
                            && evaluateL(interaction)

                },
                { interaction ->
                    val doorObjectZone = interaction.quoi as DoorObjectZone

                    if (interaction.qui is ObjectZone && interaction.qui.location.content.contains(interaction.qui)) {
                        interaction.qui.location.content.remove(interaction.qui)
                        (doorObjectZone.destination as GeoZone).content.add(interaction.qui)
                    }
                    interaction.qui.location = doorObjectZone.destination as GeoZone
                    interaction.qui.numberOfSteps++
                    executeL(interaction)
                })


class MoveOpenDoorRule :
        MoveRule(
                { interaction ->
                    (interaction.quoi as DoorObjectZone).key == null
                })

class MoveClosedDoorRule :
        MoveRule(
                { interaction ->
                    interaction.qui.inventory.contains((interaction.quoi as DoorObjectZone).key)
                },
                { interaction ->
                    val doorObjectZone = interaction.quoi as DoorObjectZone
                    interaction.qui.inventory.remove(doorObjectZone.key);
                    doorObjectZone.key = null;
                })


class TakeObjectRule :
        LambdaRule<Interaction<Player, Any, Any, Partie<*>>>(
                { interaction ->
                    interaction.quoi is ObjectZone
                            && !(interaction.quoi is DoorObjectZone)
                            && !(interaction.quoi is Player)
                            && interaction.qui.location.content.contains(interaction.quoi)
                },
                { interaction ->
                    interaction.qui.location.content.remove(interaction.quoi as ObjectZone)
                    interaction.qui.inventory.add(interaction.quoi)
                    if ((interaction.quoi).name === "exit") {
                        interaction.univers.status = PartieStatus.WIN
                    }
                })



val ruleBook = RulesImpl(setOf(MoveOpenDoorRule(), MoveClosedDoorRule(), TakeObjectRule()))


fun playerInteractWith(partie: Partie<*>, obj: ObjectZone): Partie<*> {
    try {
        DefaultRulesEngine<Interaction<Player, Any, Any, Partie<*>>>().fire(
                ruleBook,
                Interaction(partie.player, obj as Any, "" as Any, partie)
        )
    } catch (e: Exception) {
        println(e)
        println(e.cause)
    }
    return Partie(partie.player, partie.level, partie.status)

}

fun computePartieScore(partie: Partie<*>): MutableMap<String, Int> {

    val datas: MutableMap<String, Int> = HashMap()
    if (partie.level is LevelBoard<*>) {
        val level = partie.level as LevelBoard<ConnectedZone>
        val numberOfCulDeSac = level.toList().count { it.connected.size == 1 }
        datas.put("numberOfCulDeSac", numberOfCulDeSac)
        val solutionLength = distanceMap(level.start as BoardZone, level as Board<BoardZone>).get(level.exit)!!
        datas.put("solutionLength", solutionLength)
        datas.put("size", level.height)
        datas.put("numberOfSteps", partie.player.numberOfSteps )
        datas.put("numberOfRooms", partie.level.width * level.height )
        datas.put("score", (level.width * level.height * solutionLength * numberOfCulDeSac / (partie.player.numberOfSteps + 1)))
    }
    return datas;

}
private val LOGGER = KotlinLogging.logger {}
