package fr.perso.labyrinth.labeat

import fr.perso.labyrinth.freezone.model.DoorObjectZone
import fr.perso.labyrinth.labeat.generation.initPartieMapLabWithKey
import org.junit.Test
import kotlin.test.assertFalse
import kotlin.test.assertNotEquals

class GamePlayTest {

    @Test
    fun shouldPlayLab() {
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
        assert(partie.player.location.content.contains(partie.player))
    }
}
