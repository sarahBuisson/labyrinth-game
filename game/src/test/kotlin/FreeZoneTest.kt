import fr.perso.labyrinth.board.algorithm.composite.initPartieCompositeLabWithKey
import fr.perso.labyrinth.board.algorithm.composite.initPartieLabGameComposite
import fr.perso.labyrinth.freezone.gameplay.computePartieScore
import fr.perso.labyrinth.freezone.gameplay.initPartie
import fr.perso.labyrinth.freezone.gameplay.initPartieExit
import fr.perso.labyrinth.freezone.gameplay.playerInteractWith
import fr.perso.labyrinth.freezone.model.FreeZone
import fr.perso.labyrinth.freezone.generation.LabFiller
import fr.perso.labyrinth.freezone.generation.createCorridor
import fr.perso.labyrinth.freezone.generation.createLab
import org.junit.Test

class FreeZoneTest {


    @Test
    fun shouldGenerateLabyrinth() {

        val lab = createLab(10)

        println(lab)

    }

    @Test
    fun shouldFillLabyrinth() {
        val lab = createLab(10);
        println(lab)
        LabFiller<FreeZone>().init(lab, lab.first(),lab.last(), 10, 1)
                .fillLab();
        println(lab)
    }

    @Test
    fun shouldFillCorridor() {
        for (i in 0..100) {
            val lab = createCorridor(10);

            LabFiller<FreeZone>()
                    .init(lab, lab.first(), lab.last(), 2, 0).fillLab();
            println(lab)
        }

    }

    @Test
    fun shouldFillBigCorridor() {

        val lab = createCorridor(100);

        LabFiller<FreeZone>()
                .init(lab, lab.first(),lab.last(), 10, 0)
                .fillLab();
        println(lab)


    }


    @Test
    fun shouldPlay() {
        val partie = initPartie()
        println(partie.level.map { it.toString() + "\n" })
        println("---")
        try {
            for (i in 0..100) {
                println("" + i + " " + partie.player)
                if (!partie.player.inventory.isEmpty())
                    partie.player.selected = partie.player.inventory.random()
                playerInteractWith(partie, partie.player.location.content.random())

            }
        } catch (e: Exception) {
            throw e
        } finally {
            println("---")
            println(partie.level)

            println("---")
            println(partie.player.inventory.map { it.name })
        }

    }



    @Test
    fun shouldPlayPointAndClick() {
        val partie = initPartieExit()
        println(partie.level.map { it.toString() + "\n" })
        println("---")
        try {

            for (i in 0..100) {
                println("" + i + " " + partie.player)
                if (!partie.player.inventory.isEmpty())
                    partie.player.selected = partie.player.inventory.random()
                if (partie.player.location.content.isNotEmpty())
                    playerInteractWith(partie, partie.player.location.content.random())

            }
            println("---")
            println(partie.level)

            println("---")
            println(partie.player.inventory.map { it.name })
        } catch (e: Exception) {


            println(partie.player.inventory.map { it.name })
            throw e;
        }
    }



    @Test
    fun shouldPlayLab() {
        val partie = initPartieLabGameComposite()
        println(partie.level.toList().map { it.toString() + "\n" })
        println("---")
        try {

            for (i in 0..100) {
                println("" + i + " " + partie.player)
                if (!partie.player.inventory.isEmpty())
                    partie.player.selected = partie.player.inventory.random()
                if (partie.player.location.content.isNotEmpty())
                    playerInteractWith(partie, partie.player.location.content.random())
                if (partie.player.inventory.any { it.name == "exit" }) {
                    break;
                }
            }
            println("---")
            println(partie.level)

            println("---")
            println(partie.player.inventory.map { it.name })
            println(computePartieScore(partie))
        } catch (e: Exception) {


            println(partie.player.inventory.map { it.name })
            throw e;
        }
    }


}
