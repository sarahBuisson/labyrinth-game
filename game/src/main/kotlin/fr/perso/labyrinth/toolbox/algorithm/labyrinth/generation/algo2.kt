package fr.perso.labyrinth.toolbox.algorithm.labyrinth.generation

import fr.perso.labyrinth.toolbox.model.Board
import fr.perso.labyrinth.toolbox.model.BoardZone
import fr.perso.labyrinth.toolbox.algorithm.*
import fr.perso.labyrinth.toolbox.model.labyrinthTreeToString
import org.jeasy.rules.api.Rule
import org.jeasy.rules.api.Rules


fun <T : BoardZone> drawLabByPastingSmallCorridorToMediumOnes(board: Board<T>): Board<T> {

    val start = board.toList().random()


    val firstC = board.getNeigboursMap(start).entries.random()
    start.connectZone(firstC.value!!, firstC.key);
    var countFreeCase = board.toList().size;
    val rules1: Set<Rule<DrawLabCaseFacts<T>>> = setOf(
            ruleConnectEndCaseToAFreeNeighboor(),
            ruleConnectUnconnectedCaseToBestConnectedNei()
    )
    val rules = Rules<DrawLabCaseFacts<T>>(rules1)
    do {
        for (case in board.toList().shuffled()) {
            val facts = DrawLabCaseFacts(case, board)
            runBookD(facts, rules)
        }
        val previousCount = countFreeCase
        countFreeCase = board.toList().count { it.connections.size == 0 }
    } while (countFreeCase < previousCount)

    val numberOfCulDeSacToKeep = board.height
    complexiteMergeImpasse(board, numberOfCulDeSacToKeep)

    println(labyrinthTreeToString(board))
    return board
}
