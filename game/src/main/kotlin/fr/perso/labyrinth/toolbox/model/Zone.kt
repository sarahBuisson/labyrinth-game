package fr.perso.labyrinth.toolbox.model

import fr.perso.labyrinth.freezone.model.ObjectZone
import kotlinx.serialization.Serializable
import kotlin.js.ExperimentalJsExport
import kotlin.js.JsExport

@JsExport
interface Zone {}

@JsExport
interface ConnectedZone {
    val connected: List<out ConnectedZone>

    fun connectTo(other: ConnectedZone)

    fun unconnectTo(other: ConnectedZone)
}

interface NamedZone {
    val name: String
}

interface GeoZone {
    val content: MutableList<ObjectZone>
}
