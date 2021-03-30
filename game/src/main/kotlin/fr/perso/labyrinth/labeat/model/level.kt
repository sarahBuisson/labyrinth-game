package fr.perso.labyrinth.labeat.model

import fr.perso.labyrinth.freezone.model.DoorObjectZone
import fr.perso.labyrinth.freezone.model.ObjectZone
import fr.perso.labyrinth.labeat.CompositeZoneSerializer
import fr.perso.labyrinth.labeat.LevelBoardSerializer
import fr.perso.labyrinth.toolbox.model.*
import kotlinx.serialization.*


@Serializable(CompositeZoneSerializer::class)
class CompositeZone(
    override val x: Int,
    override val y: Int,
    override val content: MutableList<ObjectZone> = mutableListOf()
) : GeoZone, ConnectedZone,
    BoardZone(x, y) {

    fun getDoorAt(direction: Direction): DoorObjectZone? {
        val nextZone = connections.get(direction);
        return this.content.filterIsInstance<DoorObjectZone>().find { it.destination.equals(nextZone) };
    }

    override fun toString(): String {
        return "" + x + " " + y
    }
}


@Serializable(LevelBoardSerializer::class)
class LevelBoard<T : Any>(
    width: Int, height: Int,
    content: MutableList<MutableList<T>> = mutableListOf()
) : Board<T>(width, height, content) {


    fun fill(factory: (x: Int, y: Int, board: Board<T>) -> T) {
        for (y in 0..height - 1) {
            content.add(mutableListOf())
            for (x in 0..width - 1) {
                content.get(y).add(factory(x, y, this))

            }
        }
        this.start = toList().random()
        this.exit = toList().random()
    }

    lateinit var start: T;

    // should be lateinit but js don't work if it is. This data will really initialize later
    lateinit var exit: T // should be lateinit but js don't work if it is. this data will really initialize later


}
