package fr.perso.labyrinth.labeat.generation

import fr.perso.labyrinth.labeat.model.CompositeZone
import fr.perso.labyrinth.labeat.model.LevelBoard
import fr.perso.labyrinth.toolbox.algorithm.dataMap.distanceMap
import fr.perso.labyrinth.toolbox.algorithm.filterUntilOnce
import fr.perso.labyrinth.toolbox.algorithm.isAnIntersection
import fr.perso.labyrinth.toolbox.algorithm.labyrinth.generation.drawLabByPastingSmallCorridorToMediumOnes
import fr.perso.labyrinth.toolbox.model.Board
import fr.perso.labyrinth.toolbox.model.BoardZone
import fr.perso.labyrinth.toolbox.model.Point
import mu.KotlinLogging
import kotlin.js.JsExport
import kotlin.js.ExperimentalJsExport

@JsExport
fun generateCompositeMapLabWithKey(size: Int): LevelBoard<CompositeZone> {
    val board = generateEmptyBoard(size)
    //When
    drawLabByPastingSmallCorridorToMediumOnes(board)
    chooseStartExit(board)

    var doorWithKey = ('A'..'Z').map { arrayOf("" + it, "" + it.toLowerCase()) }.toTypedArray()


    LabFillerMapLab(doorWithKey, board = board)
            .init(board.toList().filter { it.connected.isNotEmpty() }, board.start, board.exit, size * 2, 0)
            .fillLab()
    return board
}

@JsExport
fun generateEmptyBoard(size: Int): LevelBoard<CompositeZone> {
    val factory = { x: Int, y: Int, b: Board<CompositeZone> ->
        CompositeZone(x, y)
    }
    val board = LevelBoard<CompositeZone>(size, size)
    board.fill(factory)
    return board
}

@JsExport
fun <T : BoardZone> connectAllZoneOfBoard(board: Board<T>): Board<T> {
    board.toList().forEach { board.getNeigbours(it).forEach { nei -> nei.connectTo(it) } }

    return board;
}


@JsExport
fun <T> chooseStartExit(board: LevelBoard<T>)
        where T : BoardZone, T : Point {
    val suitableStart: Collection<T> = filterUntilOnce(
        board.toList(),
        {it.connected.isNotEmpty()},
        { it.connected.any { u -> isAnIntersection(u as T) } },
        { !isAnIntersection(it) })
    board.start = suitableStart.random()
    val mapDistance = distanceMap(board.start, board)
    board.exit = mapDistance.entries.maxBy { it.value }!!.key
    val mapDistanceFromExit= distanceMap(board.exit, board)
    board.start = mapDistanceFromExit
        .entries
        .filter { suitableStart.contains(it.key) && it.key!=board.exit }
        .maxBy { it.value }!!.key
}
