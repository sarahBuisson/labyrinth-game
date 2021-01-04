package fr.perso.labyrinth.toolbox.algorithm.dataMap

import fr.perso.labyrinth.toolbox.model.ConnectedZone
import fr.perso.labyrinth.toolbox.model.Board
import fr.perso.labyrinth.toolbox.model.BoardZone
import fr.perso.labyrinth.toolbox.model.Point
import fr.perso.labyrinth.toolbox.model.PointImpl


fun <T : BoardZone> distanceMap(start: Point, board: Board<T>): Map<T, Int> {
    val distance = mutableMapOf<T, Int>()
    distance.put(board.get(start)!!, 0)
    val zones = board.toList().filter { it.connected.isNotEmpty() }
    var haveChanged = false
    while (distance.size < zones.size && haveChanged) {
        haveChanged = false;
        zones.forEach { currentZone ->
            val pos = PointImpl(currentZone.x, currentZone.y)
            val dist = distance.get(board.get(pos)!!)

            val currentNei =
                board.getNeigboursMap(pos).filter { currentZone.connections.containsValue(it.value) }


            if (dist != null) {

                currentNei.forEach { entry ->
                    val neigbour = entry.value!!
                    val nDist = distance.get(board.getXY(neigbour.x, neigbour.y)!!);
                    if (nDist == null || (nDist > (1 + dist))) {
                        distance.put(board.get(entry.value)!!, dist + 1);
                        haveChanged = true;
                    }
                }
            }
        }
    }
    return distance
}

fun <T : BoardZone> numberOfIntersectionDistanceMap(start: Point, board: Board<T>): Map<T, Int> {
    val distance = mutableMapOf<T, Int>()
    distance.put(board.get(start)!!, 0)
    val zones = board.toList().filter { it.connected.isNotEmpty() }
    while (distance.size < zones.size) {

        zones.forEach { currentZone ->
            val pos = PointImpl(currentZone.x, currentZone.y)
            val dist = distance.get(board.get(pos)!!)

            val currentNei =
                board.getNeigboursMap(pos).filter { currentZone.connections.containsValue(it.value) }


            if (dist != null) {

                currentNei.forEach { entry ->
                    val neigbour = entry.value!!
                    val nDist = distance.get(board.getXY(neigbour.x, neigbour.y)!!);

                    if (neigbour.connected.size > 2) {
                        if (nDist == null || (nDist > (1 + dist))) {
                            distance.put(board.get(entry.value)!!, dist + 1);
                        }
                    } else {
                        distance.put(board.get(entry.value)!!, dist);
                    }

                }
            }
        }
    }
    return distance
}

@Deprecated("buggée, la complexité augmente sans cesse")

public fun <T : BoardZone> complexiteMap(start: Point, board: Board<T>): Map<BoardZone, Int> {
    println("complexite")
    val complexite = mutableMapOf<BoardZone, Int>()
    complexite.put(board.get(start)!!, 0)
    var changed = true;
    while (complexite.size < board.toList().size && changed) {
        println("iteration")
        changed = false;
        board.toList().forEach { currentZone ->
            val pos = PointImpl(currentZone.x, currentZone.y)
            val currentComplexite = complexite.get(board.get(pos)!!)
            val currentNei =
                board.getNeigboursMap(pos).filter { currentZone.connections.containsValue(it.value) }
            if (currentComplexite != null) {

                currentNei.forEach { entry ->
                    val neigbour = entry.value!!
                    val neiDirection = entry.key!!
                    val neiComplexite = complexite.get(board.getXY(neigbour.x, neigbour.y)!!);


                    val neiOfNeighbour =
                        board.getNeigboursMap(PointImpl(neigbour.x, neigbour.x))
                            .filter { neigbour.connections.containsValue(it.value) }

                    val commonNeiDirection: Int;
                    if (neiOfNeighbour.containsKey(neiDirection))
                        commonNeiDirection = 1
                    else commonNeiDirection = 0;
                    val biffurcation: Int
                    if (neiOfNeighbour.size > 2)
                        biffurcation = 1
                    else biffurcation = 0;
                    val newComplexite = 1 + commonNeiDirection + biffurcation



                    if (neiComplexite == null || (neiComplexite > newComplexite)) {
                        complexite.put(board.get(entry.value)!!, currentComplexite + 1);
                        changed = true;
                    }
                }
            }
        }
    }
    return complexite
}


/**
 * map of the (growing) size of the coridor, starting at the intersection
 *       2 3 4
 *       1
 * 3 2 1 0 1 2
 *       1
 *
 */

public fun <T : BoardZone> corridorGrowingSizeDistanceMap(board: Board<T>): Map<T, Int> {
    val distance = mutableMapOf<T, Int>()
    //distance.put(board.get(start)!!, 0)
    val zones = board.toList().filter { it.connected.isNotEmpty() }

    val intersections = zones.filter { it.connected.size > 2 };
    intersections.forEach {
        distance.put(it, 0)
    }

    intersections.forEach { inter ->

        inter.connected.forEach {
            var n = 1;
            CorridorIterator(it).forEach { cZone ->
                distance.put(cZone as T, n)
                n++
            }
        }
    }


    return distance
}

public fun <T : BoardZone> corridorSizeDistanceMap(board: Board<T>): Map<T, Int> {
    val distance = mutableMapOf<T, Int>()
    //distance.put(board.get(start)!!, 0)
    val zones = board.toList().filter { it.connected.isNotEmpty() }

    val intersections = zones.filter { it.connected.size > 2 };
    intersections.forEach {
        distance.put(it, 0)
    }

    intersections.forEach { inter ->

        inter.connected.forEach {
            var n = 0;
            CorridorIterator(it).forEach {
                if (it.connected.size <= 2)
                    n++
            }
            CorridorIterator(it).forEach {
                if (it.connected.size <= 2)
                    distance.put(it as T, n)
            }
        }
    }
    return distance
}


/**
 * iterate each case of a corridor, starting by start and avoiding previous, stopping at the first intersection (including-it)
 */
public class CorridorIterator<T : ConnectedZone>(var start: T, var previous: T? = null) : Iterator<T> {

    var nextVal: T? = start
    override fun hasNext(): Boolean {

        return nextVal != null
    }

    override fun next(): T {
        previous = nextVal
        val filtered = nextVal!!.connected.filter { it != previous };
        nextVal = if (filtered.size === 2) {
            filtered.first()!! as T
        } else {
            null
        }
        return previous!!
    }

    fun size(): Int {
        var n = 0;
        CorridorIterator(start, previous).forEach { n++ }
        return n
    }
}



