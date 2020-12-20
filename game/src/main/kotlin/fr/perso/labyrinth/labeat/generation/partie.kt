package fr.perso.labyrinth.labeat.generation

import fr.perso.labyrinth.freezone.model.ObjectZone
import fr.perso.labyrinth.labeat.model.CompositeZone
import fr.perso.labyrinth.labeat.model.LevelBoard
import fr.perso.labyrinth.labeat.model.Partie
import fr.perso.labyrinth.labeat.model.Player
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
