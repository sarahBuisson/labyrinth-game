package fr.perso.labyrinth.labeat

import fr.perso.labyrinth.freezone.model.DoorObjectZone
import fr.perso.labyrinth.freezone.model.KeyObjectZone
import fr.perso.labyrinth.labeat.generation.chooseStartExit
import fr.perso.labyrinth.labeat.generation.generateCompositeMapLabWithKey
import fr.perso.labyrinth.labeat.generation.generateEmptyBoard
import fr.perso.labyrinth.labeat.generation.initPartieEmpty
import fr.perso.labyrinth.labeat.model.CompositeZone
import fr.perso.labyrinth.labeat.model.LevelBoard
import fr.perso.labyrinth.toolbox.algorithm.dataMap.complexiteMap
import fr.perso.labyrinth.toolbox.algorithm.dataMap.corridorSizeDistanceMap
import fr.perso.labyrinth.toolbox.algorithm.dataMap.distanceMap
import fr.perso.labyrinth.toolbox.algorithm.labyrinth.generation.drawLabByPastingSmallCorridor
import fr.perso.labyrinth.toolbox.model.*
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals


class GenerationTest {


    @Test
    fun shouldGenerateCompositeBoardLab() {

        val factory = { x: Int, y: Int, b: Board<CompositeZone> ->
            CompositeZone(
                    x,
                    y
            )
        }
        val board = generateCompositeMapLabWithKey(10)
        //Then
        println(labyrinthTreeToString(board))
        println("----")


        val compositeZoneName: (CompositeZone) -> Any? =
                {
                    val objs = it.content.filter { it is KeyObjectZone }

                    if (objs.isNotEmpty())
                        objs.first().name
                    else
                        defaultZoneName(it)


                }
        val compositeDoorName: (Direction, CompositeZone) -> Any? = { d, zone ->
            val door = zone.content.filterIsInstance<DoorObjectZone>()
                .filter { it.destination == zone.connections.get(d) }.firstOrNull()
            if (door != null && door.key != null)
                door.name
            else
                defaultDoorName(d, zone)
        }
        println(
                labyrinthTreeToString(
                        board,
                        compositeZoneName,
                        compositeDoorName
                )
        )
    }


    @Test
    fun shouldGenerateLabWithKey() {

        val factory = { x: Int, y: Int, b: Board<CompositeZone> ->
            CompositeZone(
                    x,
                    y
            )
        }
        val board = generateCompositeMapLabWithKey(5)
        //Then
        println(labyrinthTreeToString(board))
        println("----")


        val compositeZoneName: (CompositeZone) -> Any? =
                {
                    val objs = it.content.filter { it is KeyObjectZone }

                    if (objs.isNotEmpty())
                        objs.first().name
                    else
                        defaultZoneName(it)


                }
        val compositeDoorName: (Direction, CompositeZone) -> Any? = { d, zone ->
            val door = zone.content.filterIsInstance<DoorObjectZone>()
                    .filter { it.destination == zone.connections.get(d) }.firstOrNull()
            if (door != null && door.key != null)
                door.name
            else
                defaultDoorName(d, zone)
        }
        println(
                labyrinthTreeToString(
                        board,
                        compositeZoneName,
                        compositeDoorName
                )
        )
    }


    @Test
    fun shouldGenerateTreeLab() {

        val factory = { x: Int, y: Int, b: Board<BoardZone> ->
            BoardZoneImpl(
                    x,
                    y
            )
        }
        val board = LevelBoard<BoardZone>(
                10, 10, factory
        )
        //When
        println("draw")
        drawLabByPastingSmallCorridor(board)
        println("drawed")
        chooseStartExit(board)
        println("start exit")
        //Then
        println(labyrinthTreeToString(board))
        println("----1")
        val distance = distanceMap(board.start, board)
        println(labyrinthTreeToString(board, { distance.get(it) }))
        println("----2")
       // val complexite = complexiteMap(board.start, board)
       // println(labyrinthTreeToString(board, { complexite.get(it) }))
        println("----3")
        val coridorSize = corridorSizeDistanceMap( board)
        println(labyrinthTreeToString(board, { coridorSize.get(it) }))
        println("----4")
    }


    @Test
    fun shouldGenerateEmptyLab() {

        val partie = initPartieEmpty(3);
        assertEquals(2, partie.level.getXY(0, 0)?.connections?.size)
        assertEquals(2, partie.level.getXY(0, 0)?.connected?.size)
    }


}
