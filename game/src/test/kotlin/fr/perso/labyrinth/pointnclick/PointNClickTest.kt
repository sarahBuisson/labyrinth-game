package fr.perso.labyrinth.pointnclick

import fr.perso.labyrinth.pointnclick.initPartieExit
import kotlin.test.Test

class PointNClickTest {


    @Test
    fun shouldPlayLab() {
        val partie = initPartieExit()
        println(partie.level.toList().map { it.toString() + "\n" })
        println("---")
        try {

            for (i in 0..100) {
                println("" + i + " " + partie.player)
                if (!partie.player.inventory.isEmpty())
                    partie.player.selected = partie.player.inventory.random()
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
        } catch (e: Exception) {


            println(partie.player.inventory.map { it.name })
            throw e;
        }
    }
}
