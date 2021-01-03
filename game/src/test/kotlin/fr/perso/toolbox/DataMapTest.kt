package fr.perso.toolbox

import fr.perso.labyrinth.toolbox.model.Board
import fr.perso.labyrinth.toolbox.model.PointImpl
import fr.perso.labyrinth.oldlab.ZoneOfCoridor
import fr.perso.labyrinth.toolbox.algorithm.dataMap.corridorSizeDistanceMap
import fr.perso.labyrinth.toolbox.algorithm.dataMap.distanceMap
import fr.perso.labyrinth.toolbox.algorithm.dataMap.corridorGrowingSizeDistanceMap
import fr.perso.labyrinth.toolbox.algorithm.dataMap.numberOfIntersectionDistanceMap
import fr.perso.labyrinth.toolbox.model.labyrinthTreeToString
import kotlin.test.BeforeTest
import kotlin.test.Test


class DataMapTest {

    lateinit var board: Board<ZoneOfCoridor>;


    @BeforeTest
    fun setup() {
        val factory = { x: Int, y: Int, b: Board<ZoneOfCoridor> ->
            ZoneOfCoridor(
                    x,
                    y
            )
        }
        board = Board<ZoneOfCoridor>(
                10, 10, factory
        )

        for (x in 0..4) {
            board.getXY(x, 4)!!.connectTo(board.getXY(x + 1, 4)!!)
            board.getXY(x, 8)!!.connectTo(board.getXY(x + 1, 8)!!)
        }

        for (y in 0..8) {
            board.getXY(2, y)!!.connectTo(board.getXY(2, y + 1)!!)
        }
        for (y in 5..8) {
            board.getXY(4, y)!!.connectTo(board.getXY(4, y + 1)!!)
        }
    }

    @Test
    fun shouldComputeMapDistance() {
        val map = distanceMap(PointImpl(2, 4), board)
        println(labyrinthTreeToString(board, {
            map.get(it) ?: "x"
        }))
    }

    @Test
    fun shouldComputenumberOfIntersectionDistanceMap() {
        val map = numberOfIntersectionDistanceMap(PointImpl(2, 0), board)
        println(labyrinthTreeToString(board, {
            map.get(it) ?: "x"
        }))
    }

    @Test
    fun shouldComputecorridorGrowingSizeDistanceMap() {
        val map = corridorGrowingSizeDistanceMap(board)
        println(labyrinthTreeToString(board, {
            map.get(it) ?: "x"
        }))
    }

    @Test
    fun shouldComputecorridorSizeDistanceMap() {
        val map = corridorSizeDistanceMap(board)
        println(labyrinthTreeToString(board, {
            map.get(it) ?: "x"
        }))
    }
}
