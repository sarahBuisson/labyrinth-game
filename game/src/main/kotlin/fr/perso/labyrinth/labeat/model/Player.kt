package fr.perso.labyrinth.labeat.model

import fr.perso.labyrinth.freezone.model.ObjectZone
import fr.perso.labyrinth.toolbox.model.GeoZone

data class Player(
        var location: GeoZone,
        val inventory: MutableList<ObjectZone> = mutableListOf<ObjectZone>(),
        var numberOfSteps: Int = 0
) : ObjectZone("player", "player")
