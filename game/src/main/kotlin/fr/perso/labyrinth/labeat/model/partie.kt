package fr.perso.labyrinth.labeat.model


class Partie<LevelType>(open val player: Player, open val level: LevelType, open var status: PartieStatus = PartieStatus.IN_PROGRESS) {


}
enum class PartieStatus {
    IN_PROGRESS, WIN, LOSE
}
