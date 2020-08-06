package fr.perso.toolbox

import fr.perso.labyrinth.toolbox.algorithm.*
import fr.perso.labyrinth.toolbox.algorithm.labyrinth.generation.drawLabByPastingSmallCorridor
import fr.perso.labyrinth.toolbox.model.*
import junit.framework.Assert.assertEquals
import org.junit.Test

class BoardTreeLabTest {





    @Test
    fun should_follow_corridor(){

        val factory = { x: Int, y: Int, b: Board<BoardZone> ->
            BoardZoneImpl(
                    x,
                    y
            )
        }
        val board = Board<BoardZone>(
                10, 1, factory
        )
        drawLabByPastingSmallCorridor(board)
        println(board)
        assertEquals(followCorridor(board.get(0,0)!!).size,10)
    }

}
