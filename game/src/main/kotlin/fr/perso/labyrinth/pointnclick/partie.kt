package fr.perso.labyrinth.pointnclick

import fr.perso.labyrinth.freezone.generation.createLab
import fr.perso.labyrinth.freezone.model.FreeZone
import fr.perso.labyrinth.freezone.model.ObjectZone
import fr.perso.labyrinth.toolbox.algorithm.generation.LabFiller
import fr.perso.labyrinth.toolbox.algorithm.generation.LabFillerExit
import fr.perso.labyrinth.toolbox.model.GeoZone


data class Player(
        var location: GeoZone,
        val inventory: MutableList<ObjectZone> = mutableListOf<ObjectZone>(),
        var selected: ObjectZone? = null
) : ObjectZone("player", "player")


class Partie<LevelType>(open val player: Player, open val level: LevelType, open var status: PartieStatus = PartieStatus.IN_PROGRESS) {


}

fun initLab(size: Int = 5): Partie<*> {
    val lab = createLab(size)
    LabFiller<FreeZone>()
            .init(lab, lab.first(), lab.last(), size, 0)
            .fillLab();
    return Partie(Player(lab.first()), lab)
}

fun initPartie(size: Int = 5): Partie<List<FreeZone>> {
    val lab = createLab(size)
    LabFiller<FreeZone>()
            .init(lab, lab.first(), lab.last(), size, size)
            .fillLab();
    return Partie(Player(lab.first()), lab)
}


fun initPartieExit(size: Int = 5): Partie<List<FreeZone>> {
    val lab = createLab(size)
    val keyToDoorArray = mutableListOf<Array<String>>()
    val objetDiversArray = mutableListOf<String>()

    for (i in 0..size) {

        keyToDoorArray.add(arrayOf("" + i.toChar(), "" + i.toChar().toUpperCase()))
        objetDiversArray.add("" + (size + i).toChar())

    }
    LabFillerExit<FreeZone>(keyToDoorArray.toTypedArray(), objetDiversArray.toTypedArray())
            .init(lab, lab.first(), lab.random(), size, size / 2).fillLab();
    return Partie(Player(lab.first()), lab)
}

