package fr.perso.labyrinth.board.algorithm.composite

import fr.perso.labyrinth.ConnectedZone
import fr.perso.labyrinth.GeoZone
import fr.perso.labyrinth.board.Board
import fr.perso.labyrinth.board.BoardZone
import fr.perso.labyrinth.board.BoardZoneImpl
import fr.perso.labyrinth.board.algorithm.chooseStartExit
import fr.perso.labyrinth.board.algorithm.labyrinth.generation.drawLabByPastingSmallCorridor
import fr.perso.labyrinth.board.algorithm.labyrinth.generation.drawLabByPastingSmallCorridorToMediumOnes
import fr.perso.labyrinth.freezone.gameplay.Partie
import fr.perso.labyrinth.freezone.gameplay.Player
import fr.perso.labyrinth.freezone.generation.*
import fr.perso.labyrinth.freezone.model.KeyObjectZone
import fr.perso.labyrinth.freezone.model.ObjectZone

class CompositeZone(x: Int, y: Int) : GeoZone, ConnectedZone, BoardZone, BoardZoneImpl(x, y) {

    override val content: MutableList<ObjectZone> = mutableListOf<ObjectZone>()
}

class LevelBoard<T : Any>(width: Int, height: Int, factory: (x: Int, y: Int, board: Board<T>) -> T) : Board<T>(width, height, factory) {
     var start: T = toList().random()// should be lateinit but js don't work if it is. This data will really initialize later
     var exit: T = toList().random()// should be lateinit but js don't work if it is. this data will really initialize later
}

fun generateComposite(size: Int): LevelBoard<CompositeZone> {
    val board = generateEmptyBoard(size)
    //
    drawLabByPastingSmallCorridor(board)
    chooseStartExit(board)
    var doorWithKey = ('A'..'Z').map { arrayOf("" + it, "" + it.toLowerCase()) }.toTypedArray()



    LabFiller<CompositeZone>(doorWithKey)
            .init(board.toList(), board.start, board.exit, 10, 0)
            .fillLab()

    board.exit!!.content.add(KeyObjectZone("victoire"))
    board.start!!.content.add(KeyObjectZone("start"))


    return board
}


fun generateCompositeMapLabWithKey(size: Int): LevelBoard<CompositeZone> {
    val board = generateEmptyBoard(size)
    //When
    drawLabByPastingSmallCorridorToMediumOnes(board)
    chooseStartExit(board)

    var doorWithKey = ('A'..'Z').map { arrayOf("" + it, "" + it.toLowerCase()) }.toTypedArray()


    LabFillerMapLab<CompositeZone>(doorWithKey, board = board)
            .init(board.toList(), board.start, board.exit, size * 2, 0)
            .fillLab()
    return board
}

fun generateEmptyBoard(size: Int): LevelBoard<CompositeZone> {
    val factory = { x: Int, y: Int, b: Board<CompositeZone> ->
        CompositeZone(
                x,
                y
        )
    }
    val board = LevelBoard<CompositeZone>(
            size, size, factory
    )
    return board
}

fun <T : BoardZone> connectAllZoneOfBoard(board: Board<T>): Board<T> {
    board.toList().forEach { board.getNeigbours(it).forEach { nei->nei.connectTo(it) } }

    return board;
}


fun initPartieLabGameComposite(size: Int = 5): Partie<LevelBoard<CompositeZone>> {
    val lab = generateEmptyBoard(size)
    //
    drawLabByPastingSmallCorridor(lab)
    chooseStartExit(lab)
    var doorWithKey = ('A'..'Z').map { arrayOf("" + it, "" + it.toLowerCase()) }.toTypedArray()

    LabFiller<CompositeZone>(doorWithKey)
            .init(lab.toList(), lab.start, lab.exit, 10, 0)
            .fillLab()
/*
    listOf("map", "radar", "boussole", "compas").forEach {
        lab.toList().random().content.add(ObjectZone(it));
    }*/
    val player = Player(lab.start)
    player.location.content.add(player)
    lab.start.content.add(ObjectZone("start"))
    lab.exit.content.add(ObjectZone("exit"))
    return Partie(player, lab)
}

fun initPartieMapLabWithKey(size: Int = 5, playerName: String = "AFGNCAAP" ): Partie<LevelBoard<CompositeZone>> {
    var lab = generateCompositeMapLabWithKey(size)
    val player = Player(lab.start)
    player.location.content.add(player)
    lab.start.content.add(ObjectZone("start"))
    lab.exit.content.add(ObjectZone("exit"))
    return Partie(Player(lab.start), lab)
}

class CompositeLabService() {

    fun generateCompositeLab(size: Int) = generateComposite(size)
    fun initPartieCompositeLab(size: Int) = initPartieLabGameComposite(size)
    fun initPartieCompositeLabWithKey(size: Int = 5): Partie<LevelBoard<CompositeZone>> {
        var lab = generateCompositeMapLabWithKey(size)
        return Partie(Player(lab.start), lab)
    }
}
