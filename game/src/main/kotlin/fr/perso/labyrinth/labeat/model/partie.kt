package fr.perso.labyrinth.labeat.model

import kotlin.js.JsExport


@JsExport
class Partie<LevelType>(
    public open val player: Player,
    public open val level: LevelType,
    public open var status: PartieStatus = PartieStatus.IN_PROGRESS
) {
   val messages= mutableListOf<String>()

}

enum class PartieStatus {
    IN_PROGRESS, WIN, LOSE
}
