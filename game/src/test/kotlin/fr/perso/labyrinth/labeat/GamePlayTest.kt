package fr.perso.labyrinth.labeat

import fr.perso.labyrinth.freezone.model.DoorObjectZone
import fr.perso.labyrinth.labeat.generation.initPartieMapLabWithKey
import fr.perso.labyrinth.labeat.generation.initPartieSpiral
import fr.perso.labyrinth.labeat.model.CompositeZone
import fr.perso.labyrinth.labeat.model.PartieStatus
import fr.perso.labyrinth.labeat.model.Player
import fr.perso.labyrinth.toolbox.model.Direction
import kotlin.test.*

class GamePlayTest {

    @Test
    fun shouldPlayLab() {
        println("init partie")
        val partie = initPartieMapLabWithKey()
        println(partie.level.toList().map { it.toString() + "\n" })
        println("---")
        try {

            for (i in 0..100) {
                println("" + i + " " + partie.player)
                if (partie.player.location.content.isNotEmpty())
                    playerInteractWith(partie, partie.player.location.content.random())
                if (partie.player.inventory.any { it.name == "exit" }) {
                    break;
                }
            }
            println("---")
            println(partie.level)

            println("---")
            println(partie.player.inventory.map { it.name })
            println(computePartieScore(partie))
        } catch (e: Exception) {


            println(partie.player.inventory.map { it.name })
            throw e;
        }
    }



    @Test
    fun shouldPlaySpiral() {
        println("init partie")
        val partie = initPartieSpiral()
        println(partie.level.toList().map { it.toString() + "\n" })
        println("---")
        var interaction = playerInteractWith(partie, (partie.player.location as CompositeZone).getDoorAt(Direction.BOTTOM)!!)
        assertEquals(interaction.result, InteractionResult.Success)
        assertEquals(1, (partie.player.location as CompositeZone).y)
        val obj = partie.player.location.content.first { it !is DoorObjectZone && it !is Player }
        playerInteractWith(partie, obj)
        assertEquals(1, partie.player.inventory.size)
        playerInteractWith(partie, (partie.player.location as CompositeZone).getDoorAt(Direction.BOTTOM)!!)
        assertEquals(2, (partie.player.location as CompositeZone).y)
        playerInteractWith(partie, partie.player.location.content.first { it !is DoorObjectZone && it !is Player })
        playerInteractWith(partie, partie.player.location.content.first { it !is DoorObjectZone && it !is Player })

        playerInteractWith(partie, (partie.player.location as CompositeZone).getDoorAt(Direction.RIGHT)!!)
        playerInteractWith(partie, (partie.player.location as CompositeZone).getDoorAt(Direction.RIGHT)!!)
        playerInteractWith(partie, (partie.player.location as CompositeZone).getDoorAt(Direction.TOP)!!)
        playerInteractWith(partie, (partie.player.location as CompositeZone).getDoorAt(Direction.TOP)!!)
        playerInteractWith(partie, (partie.player.location as CompositeZone).getDoorAt(Direction.LEFT)!!)
        playerInteractWith(partie, (partie.player.location as CompositeZone).getDoorAt(Direction.BOTTOM)!!)
        assertEquals(1, (partie.player.location as CompositeZone).x)
        assertEquals(1, (partie.player.location as CompositeZone).y)
        playerInteractWith(partie, partie.player.location.content.first { it !is DoorObjectZone })
        assertEquals(PartieStatus.WIN, partie.status)
    }





    @Test
    fun shouldStillBeingAbleToMoveAfterTakingStart() {
        val partie = initPartieMapLabWithKey()
        println(partie.player.location)
        val startLocation = partie.player.location
        val startFlag = startLocation.content.first({ it.name == "start" })
        playerInteractWith(partie, startFlag);
        val door = partie.player.location.content.first({ it is DoorObjectZone })
        playerInteractWith(partie, door);


        assertNotEquals(partie.player.location, startLocation)
        assertFalse(startLocation.content.contains(partie.player))
        assertTrue(partie.player.location.content.contains(partie.player))
    }
}
