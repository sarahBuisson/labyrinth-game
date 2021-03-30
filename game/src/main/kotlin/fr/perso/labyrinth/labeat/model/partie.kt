package fr.perso.labyrinth.labeat.model

import fr.perso.labyrinth.labeat.LevelBoardSerializer
import kotlinx.serialization.Serializable

@Serializable()
class Partie<LevelType>(
    open val player: Player,
    @Serializable(LevelBoardSerializer::class)
    open val level: LevelType,
    open var status: PartieStatus = PartieStatus.IN_PROGRESS
) {
    val messages = mutableListOf<String>()

}


@Serializable
enum class PartieStatus {
    IN_PROGRESS, WIN, LOST
}
