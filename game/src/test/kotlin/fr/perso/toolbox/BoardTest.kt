package fr.perso.toolbox

import fr.perso.labyrinth.oldlab.*
import fr.perso.labyrinth.toolbox.model.Board
import fr.perso.labyrinth.toolbox.model.PointImpl
import org.jeasy.rules.core.RulesImpl
import org.junit.Test

class BoardTest {


    @Test
    fun shouldGenerateBoard() {


        val factory = { x: Int, y: Int, b: Board<ZoneOfCoridor> ->
            ZoneOfCoridor(
                    x,
                    y
            )
        }
        val b = Board<ZoneOfCoridor>(
                10, 10, factory
        )

        val partie =
                Partie(Cursor(PointImpl(3, 3)), b)
        runBook(
                partie,
                RulesImpl(
                        setOf(
                                MoveWithoutCross(),
                                Turn(),
                                Jump()
                        )
                )
        )

        println(b)
        println(partie.cursor.position)


    }


    @Test
    fun shouldGenerateCoridorSimple() {


        val factory = { x: Int, y: Int, b: Board<ZoneOfCoridor> ->
            ZoneOfCoridor(
                    x,
                    y
            )
        }
        val b = Board<ZoneOfCoridor>(
                10, 10, factory
        )

        val coridor =
                drawDirectCoridorH(
                        b,
                        PointImpl(4, 2),
                        PointImpl(9, 5)
                )

        coridor.forEachIndexed { index: Int, ZoneOfCoridor: ZoneOfCoridor -> ZoneOfCoridor.haveBeenVisited = index + 1; }
        println(b.toString { "" + it.haveBeenVisited })
        println(labyrinthToString(b, listOf(coridor)))
    }



}
