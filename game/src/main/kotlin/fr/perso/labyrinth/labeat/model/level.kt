package fr.perso.labyrinth.labeat.model

import fr.perso.labyrinth.freezone.model.DoorObjectZone
import fr.perso.labyrinth.freezone.model.ObjectZone
import fr.perso.labyrinth.toolbox.model.*
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
class CompositeZone(x: Int, y: Int) : GeoZone, ConnectedZone, BoardZone, BoardZoneImpl(x, y) {

    override val content: MutableList<ObjectZone> = mutableListOf<ObjectZone>()
    fun getDoorAt(direction: Direction): DoorObjectZone? {
        val nextZone = connections.get(direction);
        return this.content.filterIsInstance<DoorObjectZone>().find { it.destination.equals(nextZone) };
    }

    override fun toString(): String {
        return ""+x+" "+y
    }
}

@JsExport
class LevelBoard<T : Any>(width: Int, height: Int, factory: (x: Int, y: Int, board: Board<T>) -> T) : Board<T>(width, height, factory) {
    var start: T = toList().random()// should be lateinit but js don't work if it is. This data will really initialize later
    var exit: T = toList().random()// should be lateinit but js don't work if it is. this data will really initialize later
}
