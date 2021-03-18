package fr.perso.labyrinth.toolbox.model

import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
interface BoardZone : ConnectedZone, Point {
    val connections: Map<Direction, out BoardZone>
    fun directionOf(newPosition: BoardZoneImpl): Direction
    fun connectZone(newPosition: BoardZone, direction: Direction)
    fun connectionsEntries(): Set<Map.Entry<Direction, BoardZoneImpl>>
}

@JsExport
open class BoardZoneImpl(override val x: Int, override val y: Int) : PointImpl(x, y), BoardZone, ConnectedZone {
    override val connections: Map<Direction, BoardZoneImpl> = HashMap()

    override val connected: List<BoardZoneImpl> = mutableListOf()


    override fun connectTo(other: ConnectedZone) {
        other as BoardZoneImpl
        val direction = directionOf(other)
        connectZone(other, direction)
    }

    override fun unconnectTo(newPosition: ConnectedZone) {
        newPosition as BoardZoneImpl
        val direction = directionOf(newPosition)
        (newPosition.connections as MutableMap<Direction, BoardZone>).remove(direction.inv())
        (this.connections as MutableMap<Direction, BoardZone>).remove(direction)
        (newPosition.connected as MutableList).remove(this)
        (this.connected as MutableList).remove(newPosition)
    }

    override fun directionOf(newPosition: BoardZoneImpl): Direction {
        val direction = Direction.of(newPosition.x - this.x, newPosition.y - this.y)!!

        return direction
    }


    override fun connectZone(

        newPosition: BoardZone,
        direction: Direction
    ) {
        (newPosition.connections as MutableMap<Direction, BoardZone>).put(direction.inv(), this)
        (this.connections as MutableMap<Direction, BoardZone>).put(direction, newPosition)
        (this.connected as MutableList<BoardZone>).add(newPosition)
        (newPosition.connected as MutableList<BoardZone>).add(this)
    }

    override fun connectionsEntries() = connections.entries

}

@JsExport
open class Board<T : Any>(val width: Int,val height: Int, factory: (x: Int, y: Int, board: Board<T>) -> T) {


    val content: MutableList<MutableList<T>> = mutableListOf()

    init {
        for (y in 0..height - 1) {
            content.add(mutableListOf())
            for (x in 0..width - 1) {

                content.get(y).add(factory(x, y, this))

            }
        }
    }

    @JsName("getXY")
    fun getXY(x: Int, y: Int): T? {
        if (x in 0..this.width - 1 && y in 0..this.height - 1) return content.get(y)?.get(x) else return null
    }

    fun get(p: Point): T? = getXY(p.x, p.y)

    fun getNeigbourXY(x: Int, y: Int, dx: Int, dy: Int): T? = getXY(x + dx, y + dy)
    fun getNeigbour(p: Point, d: Direction): T? = getXY(p.x + d.x, p.y + d.y)
    fun getNeigbours(p: Point): List<T> = Direction.values().mapNotNull { this.getNeigbour(p, it) }
    fun getNeigboursMap(p: Point): Map<Direction, T> =
        Direction.values().associate { Pair(it, this.getNeigbour(p, it)) }.filter { it.value != null }
            .mapValues { it.value!! }

    fun toFullString(toString: (it: T) -> String): String {
        return content.map { "\n" + it.map { it2: T -> " " + toString(it2) } }.toString()
    }

    fun toList(): List<T> = content.flatMap { it }

}

@JsExport
interface Point {
    val x: Int
    val y: Int
}

open class PointImpl(override val x: Int, override val y: Int) : Point {

    fun add(x: Int, y: Int): PointImpl = PointImpl(this.x + x, this.y + y)
    fun add(p2: PointImpl): PointImpl =
        PointImpl(this.x + p2.x, this.y + p2.y)

    override fun toString(): String {
        return "($x, $y)"
    }

}

enum class Direction(val x: Int, val y: Int) {
    LEFT(-1, 0),
    TOP(0, -1),
    RIGHT(1, 0),
    BOTTOM(0, 1);

    fun times(n: Int): PointImpl = PointImpl(x * n, y * n)
    fun inv(): Direction = when (this) {
        LEFT -> RIGHT
        RIGHT -> LEFT
        TOP -> BOTTOM
        BOTTOM -> TOP

    }

    companion object {
        public fun of(x: Int, y: Int): Direction? {
            return values().find { it.x == x && it.y == y }
        }
    }

}

@JsExport
val defaultZoneName: (BoardZone) -> Any? = {
    when {
        it.connections.size > 0 -> '+'
        else -> ' '
    }
}


val defaultDoorName: (Direction, BoardZone) -> Any = { d, zone ->
    val show = zone.connections.containsKey(d)
    when {
        d == Direction.TOP && show -> "|"
        d == Direction.TOP && !show -> " "
        d == Direction.BOTTOM && show -> "|"
        d == Direction.BOTTOM && !show -> " "
        d == Direction.LEFT && show -> "-"
        d == Direction.LEFT && !show -> " "
        d == Direction.RIGHT && show -> "-"
        d == Direction.RIGHT && !show -> " "
        else -> '?'
    }
}

@JsExport
fun <T : BoardZone> labyrinthTreeToString(
    board: Board<T>,
    zoneName: (T) -> Any? = defaultZoneName,
    doorName: (Direction, T) -> Any? = defaultDoorName
): String {


    var str = ""

    str += board.content.map {


        val horizontal: String = it.map { zone ->
            var r: String = ""

            r += doorName(Direction.LEFT, zone)

            r += zoneName(zone)

            r += doorName(Direction.RIGHT, zone);

            r

        }.joinToString("")


        val verticalTop = it.map { zone ->
            " ${doorName(Direction.TOP, zone)} "
        }.joinToString("")

        val verticalBottom = it.map { zone ->
            " ${doorName(Direction.BOTTOM, zone)} "
        }.joinToString("")
        verticalTop + "\n" + horizontal + "\n" + verticalBottom


    }.joinToString("\n")
    return str;
}