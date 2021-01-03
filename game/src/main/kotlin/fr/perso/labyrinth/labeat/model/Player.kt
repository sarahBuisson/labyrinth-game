package fr.perso.labyrinth.labeat.model

import fr.perso.labyrinth.freezone.model.ObjectZone
import fr.perso.labyrinth.toolbox.model.GeoZone
import kotlin.js.JsExport

@JsExport
data class Player(
        public var location: GeoZone,
        public val inventory: MutableList<ObjectZone> = mutableListOf<ObjectZone>(),
        public var numberOfSteps: Int = 0
) : ObjectZone("player", "player")
