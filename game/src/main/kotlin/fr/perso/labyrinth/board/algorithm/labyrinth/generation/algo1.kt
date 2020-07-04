package fr.perso.labyrinth.board.algorithm.labyrinth.generation

import fr.perso.labyrinth.board.Board
import fr.perso.labyrinth.board.BoardZone
import fr.perso.labyrinth.board.algorithm.*
import fr.perso.labyrinth.board.labyrinthTreeToString
import org.jeasy.rules.api.Rule
import org.jeasy.rules.core.RulesImpl


fun <T : BoardZone> drawLabByPastingSmallCorridor(board: Board<T>): Board<T> {

    val start = board.toList().random()


    val firstC = board.getNeigboursMap(start).entries.random()
    start.connectZone(firstC.value!!, firstC.key);
    var countFreeCase = board.toList().size;
    val rules1:Set<Rule<DrawLabCaseFacts<T>>> = setOf(
            ruleConnectEndCaseToAFreeNeighboor(),
            ruleConnectUnconnectedCaseToBestConnectedNei()
    )
    val rules = RulesImpl(rules1)
    do {
        for (case in board.toList().shuffled()) {
            val facts = DrawLabCaseFacts(case, board)
            runBookD(facts, rules)
        }
        val previousCount = countFreeCase
        countFreeCase = board.toList().count { it.connections.size == 0 }
    } while (countFreeCase < previousCount)

    complexiteMergeImpasse(board)
    complexiteMergeImpasse(board)

    println(labyrinthTreeToString(board))
    return board
}
