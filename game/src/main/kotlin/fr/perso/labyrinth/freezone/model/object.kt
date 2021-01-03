package fr.perso.labyrinth.freezone.model

import fr.perso.labyrinth.toolbox.model.ConnectedZone
import kotlin.js.JsExport

@JsExport
open class ObjectZone(open var name: String, open var type: String?=null) {
    override fun hashCode(): Int {
        return name.hashCode()
    }

    override fun equals(other: Any?): Boolean {
        if (other is ObjectZone)
            return name == other.name
        return false
    }
}

class DoorObjectZone(val destination: ConnectedZone, var key: ObjectZone? = null) : ObjectZone("open door","door")
class KeyObjectZone(override var name: String) :TakableObjectZone, ObjectZone(name,"key")
interface TakableObjectZone

class ExchangeObjectZone(
        var want: ObjectZone,
        var give: ObjectZone,
        override var name: String = " exchange donne ${give.name} contre ${want.name}"
) : ObjectZone(name, "merchand")
