package fr.perso.labyrinth.labeat.generation

import fr.perso.labyrinth.freezone.model.DoorObjectZone
import fr.perso.labyrinth.freezone.model.KeyObjectZone
import fr.perso.labyrinth.freezone.model.ObjectZone
import fr.perso.labyrinth.labeat.model.CompositeZone
import fr.perso.labyrinth.labeat.model.LevelBoard
import fr.perso.labyrinth.labeat.model.Partie
import fr.perso.labyrinth.labeat.model.Player
import fr.perso.labyrinth.toolbox.model.BoardZone
import fr.perso.labyrinth.toolbox.model.Direction
import mu.KotlinLogging
import kotlin.js.JsExport

@JsExport
fun initPartieMapLabWithKey(size: Int = 5, playerName: String = "AFGNCAAP" ): Partie<LevelBoard<CompositeZone>> {
    var lab = generateCompositeMapLabWithKey(size)
    val player = Player(lab.start)
    player.location.content.add(player)
    lab.start.content.add(ObjectZone("start"))
    lab.exit.content.add(ObjectZone("exit"))
    return Partie(player, lab)
}

@JsExport
fun initPartieEmpty(size: Int = 5, playerName: String = "AFGNCAAP"): Partie<LevelBoard<CompositeZone>> {
    var lab = generateEmptyBoard(size)

    for (x in 0..size - 2)
        for (y in 0..size - 2) {
            lab.getXY(x, y)!!.connectZone(lab.getXY(x, y + 1) as CompositeZone, Direction.BOTTOM)
            lab.getXY(x, y)!!.connectZone(lab.getXY(x + 1, y) as CompositeZone, Direction.RIGHT)
        }

    val player = Player(lab.start)
    player.location.content.add(player)
    LOGGER.info { "connection" + lab.getXY(1, 1)?.connections?.size }
    return Partie(player, lab)
}

@JsExport
fun initPartieSpiral(): Partie<LevelBoard<CompositeZone>> {
    var lab:LevelBoard<CompositeZone> = generateEmptyBoard(3)

    lab.getXY(0, 0)!!.connectZone(lab.getXY(0,  1) as CompositeZone, Direction.BOTTOM)
    lab.getXY(0, 1)!!.connectZone(lab.getXY(0,  2) as CompositeZone, Direction.BOTTOM)
    lab.getXY(0, 2)!!.connectZone(lab.getXY(1,  2) as CompositeZone, Direction.RIGHT)
    lab.getXY(1, 2)!!.connectZone(lab.getXY(2,  2) as CompositeZone, Direction.RIGHT)
    lab.getXY(2, 2)!!.connectZone(lab.getXY(2,  1) as CompositeZone, Direction.TOP)
    lab.getXY(2, 1)!!.connectZone(lab.getXY(2,  0) as CompositeZone, Direction.TOP)
    lab.getXY(2, 0)!!.connectZone(lab.getXY(1,  0) as CompositeZone, Direction.LEFT)
    lab.getXY(1, 0)!!.connectZone(lab.getXY(1,  1) as CompositeZone, Direction.BOTTOM)

    lab.start= lab.getXY(0,0)!!
    lab.exit= lab.getXY(1,1)!!

    val player = Player(lab.start)
    player.location.content.add(player)
    lab.start.content.add(ObjectZone("start"))
    lab.exit.content.add(ObjectZone("exit"))

    lab.toList().forEach { zone: CompositeZone ->
        zone.connected.forEach { destination->
            zone.content.add(DoorObjectZone(destination))
        }
    }


    val keyK = KeyObjectZone("K")
    lab.getXY(0, 1)!!.content.add(keyK)
    val doorK = lab.getXY(0, 1)!!.content.filterIsInstance<DoorObjectZone>()
        .find { it.destination == lab.getXY(0, 2) }!!
    doorK.key = keyK
    doorK.name = keyK.name

    val keyK2 = KeyObjectZone("K2")
    lab.getXY(0, 2)!!.content.add(keyK2)

    val doorK1 = lab.getXY(0, 2)!!.content.filterIsInstance<DoorObjectZone>()
        .find { it.destination == lab.getXY(1, 2) }!!
    doorK1.key = keyK2
    doorK1.name = keyK2.name

       val keyK3 = KeyObjectZone("K3")
    lab.getXY(0, 2)!!.content.add(keyK3)

    val doorK3 = lab.getXY(1, 2)!!.content.filterIsInstance<DoorObjectZone>()
        .find { it.destination == lab.getXY(2, 2) }!!
    doorK3.key = keyK3
    doorK3.name = keyK3.name

    return Partie(player, lab)
}
private val LOGGER = KotlinLogging.logger {}
