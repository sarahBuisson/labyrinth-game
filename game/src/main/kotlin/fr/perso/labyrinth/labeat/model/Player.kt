package fr.perso.labyrinth.labeat.model

import fr.perso.labyrinth.freezone.model.ObjectZone
import fr.perso.labyrinth.toolbox.model.GeoZone
import kotlinx.serialization.Contextual
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@Serializable
data class Player(
        @Contextual public var location: CompositeZone,
        public val inventory: MutableList<ObjectZone> = mutableListOf<ObjectZone>(),
        public var numberOfSteps: Int = 0
) : ObjectZone("player", "player")
