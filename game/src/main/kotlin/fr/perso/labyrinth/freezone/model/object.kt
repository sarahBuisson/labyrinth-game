package fr.perso.labyrinth.freezone.model

import fr.perso.labyrinth.labeat.model.CompositeZone
import fr.perso.labyrinth.toolbox.model.ConnectedZone
import fr.perso.labyrinth.toolbox.model.Direction
import fr.perso.labyrinth.toolbox.model.PointImpl
import kotlinx.serialization.*
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.descriptors.*
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import kotlin.js.JsExport
import kotlin.js.JsName

@Serializable()
@JsName("ObjectZone")
open class ObjectZone(open var name: String = "", open var type: String? = null) {

    override fun toString(): String {
        return "" + type + " " + name
    }
}

@Serializable()
class DoorObjectZone(
    @Polymorphic()
    val destination: ConnectedZone,
    var key: ObjectZone? = null
) : ObjectZone(key?.name ?: "", "door") {
}
@Serializable
class KeyObjectZone(@SerialName("nameBis") override var name: String) : TakableObjectZone, ObjectZone(name, "key")

interface TakableObjectZone

@Serializable
class ExchangeObjectZone(
    var want: ObjectZone,
    var give: ObjectZone,
) : ObjectZone( " exchange ${give.name} for ${want.name}", "merchand")
