package fr.perso.toolbox

import fr.perso.labyrinth.toolbox.algorithm.*
import fr.perso.labyrinth.toolbox.algorithm.labyrinth.generation.drawLabByPastingSmallCorridor
import fr.perso.labyrinth.toolbox.model.*
import kotlin.test.Test
import kotlin.test.assertEquals

class BoardTreeLabTest {





    @Test
    fun should_follow_corridor(){

        val factory = { x: Int, y: Int, b: Board<BoardZone> ->
            BoardZone(
                    x,
                    y
            )
        }
        val board = Board<BoardZone>(
                10, 1, factory
        )
        drawLabByPastingSmallCorridor(board)
        println(board)
        assertEquals(followCorridor(board.getXY(0,0)!!).size,10)
    }

}
