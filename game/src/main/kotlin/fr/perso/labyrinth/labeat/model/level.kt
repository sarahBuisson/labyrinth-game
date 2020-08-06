package fr.perso.labyrinth.labeat.model

import fr.perso.labyrinth.freezone.model.ObjectZone
import fr.perso.labyrinth.toolbox.model.*

class CompositeZone(x: Int, y: Int) : GeoZone, ConnectedZone, BoardZone, BoardZoneImpl(x, y) {

    override val content: MutableList<ObjectZone> = mutableListOf<ObjectZone>()
}

class LevelBoard<T : Any>(width: Int, height: Int, factory: (x: Int, y: Int, board: Board<T>) -> T) : Board<T>(width, height, factory) {
    var start: T = toList().random()// should be lateinit but js don't work if it is. This data will really initialize later
    var exit: T = toList().random()// should be lateinit but js don't work if it is. this data will really initialize later
}
