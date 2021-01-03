package fr.perso.labyrinth.pointnclick

import fr.perso.labyrinth.toolbox.model.GeoZone
import fr.perso.labyrinth.freezone.model.*
import mu.KotlinLogging
import org.jeasy.rules.api.Action
import org.jeasy.rules.api.Rules
import org.jeasy.rules.core.DefaultRule
import org.jeasy.rules.core.DefaultRulesEngine

class Interaction<Qui, Quoi, Comment, Univers>(val qui: Qui, val quoi: Quoi, val comment: Comment, val univers: Univers)


abstract class MoveRule(
    evaluateL: (Interaction<Player, Any, Any, Partie<*>>) -> kotlin.Boolean,
    executeL: (Interaction<Player, Any, Any, Partie<*>>) -> kotlin.Unit = {}
) :
    DefaultRule<Interaction<Player, Any, Any, Partie<*>>>(
        condition = { interaction ->
            interaction.quoi is DoorObjectZone
                    && interaction.qui.location.content.contains(interaction.quoi)
                    && evaluateL(interaction)

        },
        actions = listOf(object : Action<Interaction<Player, Any, Any, Partie<*>>> {


            override fun execute(interaction: Interaction<Player, Any, Any, Partie<*>>) {
                val doorObjectZone = interaction.quoi as DoorObjectZone

                if (interaction.qui is ObjectZone && interaction.qui.location.content.contains(interaction.qui)) {
                    interaction.qui.location.content.remove(interaction.qui)
                    (doorObjectZone.destination as GeoZone).content.add(interaction.qui)
                }
                interaction.qui.location = doorObjectZone.destination as GeoZone
                executeL(interaction)
            }
        })
    )


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
    DefaultRule<Interaction<Player, Any, Any, Partie<*>>>(
        condition = { interaction ->
            interaction.quoi is ObjectZone
                    && !(interaction.quoi is DoorObjectZone)
                    && !(interaction.quoi is Player)
                    && interaction.qui.location.content.contains(interaction.quoi)
        },
        actions = listOf(object : Action<Interaction<Player, Any, Any, Partie<*>>> {


            override fun execute(interaction: Interaction<Player, Any, Any, Partie<*>>) {
                interaction.qui.location.content.remove(interaction.quoi as ObjectZone)
                interaction.qui.inventory.add(interaction.quoi)
                if ((interaction.quoi).name === "exit") {
                    interaction.univers.status = PartieStatus.WIN
                }
            }
        })
    )

enum class PartieStatus {
    IN_PROGRESS, WIN, LOSE

}

class ExchangeObjectRule :
    DefaultRule<Interaction<Player, Any, Any, Partie<*>>>(
        condition = { interaction ->
            interaction.quoi is ExchangeObjectZone &&
                    interaction.qui.selected == interaction.quoi.want
        },
        actions = listOf(object : Action<Interaction<Player, Any, Any, Partie<*>>> {


            override fun execute(interaction: Interaction<Player, Any, Any, Partie<*>>) {
                interaction.qui.inventory.remove((interaction.quoi as ExchangeObjectZone).want)
                interaction.qui.inventory.add((interaction.quoi as ExchangeObjectZone).give)
                interaction.qui.selected = null;
                interaction.quoi.name = "thanks !"
            }
        })
    )


val ruleBook = Rules(MoveOpenDoorRule(), MoveClosedDoorRule(), TakeObjectRule(), ExchangeObjectRule())


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

private val LOGGER = KotlinLogging.logger {}
