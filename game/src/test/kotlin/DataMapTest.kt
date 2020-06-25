import fr.perso.labyrinth.board.Board
import fr.perso.labyrinth.board.PointImpl
import fr.perso.labyrinth.board.algorithm.ZoneOfCoridor
import fr.perso.labyrinth.board.algorithm.dataMap.corridorSizeDistanceMap
import fr.perso.labyrinth.board.algorithm.dataMap.distanceMap
import fr.perso.labyrinth.board.algorithm.dataMap.corridorGrowingSizeDistanceMap
import fr.perso.labyrinth.board.algorithm.dataMap.numberOfIntersectionDistanceMap
import fr.perso.labyrinth.board.labyrinthTreeToString
import org.junit.Before
import org.junit.Test

class DataMapTest {

    lateinit var board: Board<ZoneOfCoridor>;


    @Before
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
            board.get(x, 4)!!.connectTo(board.get(x + 1, 4)!!)
            board.get(x, 8)!!.connectTo(board.get(x + 1, 8)!!)
        }

        for (y in 0..8) {
            board.get(2, y)!!.connectTo(board.get(2, y + 1)!!)
        }
        for (y in 5..8) {
            board.get(4, y)!!.connectTo(board.get(4, y + 1)!!)
        }
    }

    @Test
    fun shouldComputeMapDistance() {
        val map = distanceMap(PointImpl(2, 4), board)
        println(labyrinthTreeToString(board, { map.get(it)?:"x" }))
    }

    @Test
    fun shouldComputenumberOfIntersectionDistanceMap() {
        val map = numberOfIntersectionDistanceMap(PointImpl(2, 0), board)
        println(labyrinthTreeToString(board, { map.get(it)?:"x" }))
    }

    @Test
    fun shouldComputecorridorGrowingSizeDistanceMap() {
        val map = corridorGrowingSizeDistanceMap(board)
        println(labyrinthTreeToString(board, { map.get(it)?:"x" }))
    }

    @Test
    fun shouldComputecorridorSizeDistanceMap() {
        val map = corridorSizeDistanceMap(board)
        println(labyrinthTreeToString(board, { map.get(it)?:"x" }))
    }
}