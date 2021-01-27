package fr.perso.labyrinth.freezone.model

import fr.perso.labyrinth.toolbox.model.ConnectedZone
import kotlin.js.JsExport

@JsExport
open class ObjectZone(open var name: String, open var type: String?=null) {

    override fun toString(): String {
        return "" + type + " " + name
    }
}

class DoorObjectZone(
    val destination: ConnectedZone,
    var key: ObjectZone? = null
) : ObjectZone(key?.name ?: "", "door"){
}

class KeyObjectZone(override var name: String) : TakableObjectZone, ObjectZone(name, "key")
interface TakableObjectZone

class ExchangeObjectZone(
    var want: ObjectZone,
    var give: ObjectZone,
    override var name: String = " exchange ${give.name} for ${want.name}"
) : ObjectZone(name, "merchand")
