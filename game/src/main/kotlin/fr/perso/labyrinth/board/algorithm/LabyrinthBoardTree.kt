package fr.perso.labyrinth.board.algorithm

import fr.perso.labyrinth.ConnectedZone
import fr.perso.labyrinth.board.*
import fr.perso.labyrinth.board.algorithm.composite.LevelBoard
import fr.perso.labyrinth.board.algorithm.dataMap.CorridorIterator
import fr.perso.labyrinth.board.algorithm.dataMap.distanceMap
import org.jeasy.rules.api.Rule
import org.jeasy.rules.core.RulesImpl
import org.jeasy.rules.api.Rules
import org.jeasy.rules.core.DefaultRulesEngine
import org.jeasy.rules.core.LambdaRule


class DrawLabFacts<T : BoardZone>(val board: Board<T>)
class DrawLabCaseFacts<T : BoardZone>(val zone: BoardZone, val board: Board<T>)


fun <T : BoardZone> ruleConnectEndCaseToAFreeNeighboor() = LambdaRule<DrawLabCaseFacts<T>>({ facts ->
    facts.zone.connections.size == 1


}, { facts ->
    val freeNeighboors =
            facts.board.getNeigboursMap(facts.zone).filter { it.value != null }.filter { it.value!!.connections.size == 0 }
    if (freeNeighboors.isNotEmpty()) {
        val nextNei = freeNeighboors.entries.random();
        facts.zone.connectZone(nextNei.value!!, nextNei.key)
    }

});


fun <T : BoardZone> ruleAddCrossToAFreeNeighboor() = LambdaRule<DrawLabCaseFacts<T>>({ facts ->
    true


}, { facts ->
    val freeNeighboors =
            facts.board.getNeigboursMap(facts.zone).filter { it.value != null }.filter { it.value!!.connections.size == 0 }
    if (freeNeighboors.isNotEmpty()) {
        val nextNei = freeNeighboors.entries.random();
        facts.zone.connectZone(nextNei.value!!, nextNei.key)
    }

});


fun <T : BoardZone> ruleConnectUnconnectedCaseToAnyConnectedNei() = LambdaRule<DrawLabCaseFacts<T>>({ facts ->
    facts.zone.connections.size == 0


}, { facts ->
    val freeNeighboors =
            facts.board.getNeigboursMap(facts.zone).filter { it.value != null }.filter { it.value!!.connections.size > 0 }

    val nextNei = freeNeighboors.entries.random();
    facts.zone.connectZone(nextNei.value!!, nextNei.key)

});


fun <T : BoardZone> ruleConnectUnconnectedCaseToBestConnectedNei() = LambdaRule<DrawLabCaseFacts<T>>({ facts ->
    facts.zone.connections.size == 0


}, { facts ->
    val freeNeighboors =
            facts.board.getNeigboursMap(facts.zone).filter { it.value != null }.filter { it.value!!.connections.size > 0 }
    if (freeNeighboors.isNotEmpty()) {
        val nextNei = freeNeighboors.entries.sortedBy { it.value.connections.size }.last();
        facts.zone.connectZone(nextNei.value!!, nextNei.key)
    }

});

fun <T> runBookD(fact: T, rules: Rules<T>) {
    DefaultRulesEngine<T>().fire(rules, fact)
}


fun <T> chooseStartExit(board: LevelBoard<T>)
        where T : BoardZone, T : Point {

    board.start = board.toList().random()
    val mapDistance = distanceMap(board.start, board)
    board.exit = mapDistance.entries.maxBy { it.value }!!.key
    val mapDistanceS = distanceMap(board.exit!!, board)
    board.start = mapDistanceS.entries.maxBy { it.value }!!.key

}


/*
* merge two impass corridor connected into one cul de sac
* */
fun <T : BoardZone> complexiteMergeImpasse(board: Board<T>, numberOfCulDeSacToKeep:Int=board.height) {
    val culDeSac = board.toList().filter { it.connected.size == 1 }

    culDeSac.sortedBy { CorridorIterator(it).size() }


    val averageCulDeSac: Collection<T> = culDeSac.subList(0, numberOfCulDeSacToKeep)



    averageCulDeSac.shuffled().forEach { currentImpass ->

        //if is still an impass

        if (currentImpass.connected.size == 1) {
            val nearestImpasses = board.getNeigbours(currentImpass).filter { nei ->
                nei.connected.size == 1//are cul de sac
                        && !nei.connected.contains(currentImpass)//are not already linked to the current cul de sac
            }
            if (nearestImpasses.size > 0) {
                val corridors = nearestImpasses.map { impass -> followCorridor(impass) }.filter { it.isNotEmpty() }
                if (corridors.isNotEmpty()) {
                    val corridorToMerge = corridors.maxBy { it.size }!!

                    val unconnect = corridorToMerge.last().connected.find { it.connected.size > 2 }!!
                    currentImpass.connectTo(corridorToMerge.first())
                    corridorToMerge.last().unconnectTo(unconnect)
                } else {
                    println("no merge because too short $currentImpass")
                    println(nearestImpasses.map { it.toString() }.joinToString("\n"))
                    println(nearestImpasses.map { impass -> followCorridor(impass) }.map { it.toString() }.joinToString("\n"))

                }
            } else {
                println("no merge because no near $currentImpass")

            }
        }
    }


}

fun followCorridor(start: ConnectedZone): Set<ConnectedZone> {
    val ret = mutableSetOf<ConnectedZone>()
    var next: ConnectedZone? = start
    while (next != null && next.connected.size <= 2) {
        ret.add(next)
        next = next.connected.find { !ret.contains(it) }
    }
    return ret;
}


/**
 * transforme a Map of the distance or anything by zone to a 2D array
 */
fun distanceToArray(distance: Map<BoardZone, Int>, board: Board<BoardZone>): Array<Array<Int>> {
    val array: Array<Array<Int>> = Array<Array<Int>>(board.height, { Array(board.width, { 0 }) });


    distance.forEach { array[it.key.y][it.key.x] = it.value }

    return array;


}

