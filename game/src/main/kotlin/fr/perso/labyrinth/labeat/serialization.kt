package fr.perso.labyrinth.labeat

import fr.perso.labyrinth.freezone.model.*
import fr.perso.labyrinth.labeat.Interaction
import fr.perso.labyrinth.labeat.model.*
import fr.perso.labyrinth.toolbox.model.BoardZone
import fr.perso.labyrinth.toolbox.model.Direction
import fr.perso.labyrinth.toolbox.model.PointImpl
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializer
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.descriptors.*
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.jsonObject
import kotlinx.serialization.json.jsonPrimitive
import mu.KotlinLogging
import kotlin.js.JsExport
import kotlin.js.JsName


@JsExport
@JsName("toJson")
fun toJson(data: Partie<LevelBoard<CompositeZone>>): String {
    return Json.encodeToString(PartieSerializer(LevelBoardSerializer(CompositeZone.serializer())), data)
}

@JsExport
@JsName("toJsonInteraction")
fun toJsonInteraction(data: Interaction<Player, ObjectZone, String, Partie<LevelBoard<CompositeZone>>>): String {
    return Json.encodeToString(
        Interaction.serializer(
            Player.serializer(),
            ObjectZoneSerializer(),
            String.serializer(),
            PartieSerializer(LevelBoardSerializer(CompositeZone.serializer()))
            ), data
    )
}

@Serializer(forClass = Partie::class)
class PartieSerializer<T : Any>(private val dataSerializer: KSerializer<T>) : KSerializer<Partie<T>> {
    // TODO removal of explicit type crashes the compiler
    override val descriptor: SerialDescriptor = buildClassSerialDescriptor("LevelBoard") {
        element("player", Player.serializer().descriptor)
        element("level", dataSerializer.descriptor)
        element("status", PartieStatus.serializer().descriptor)
    }

    override fun deserialize(decoder: Decoder): Partie<T> {
        TODO("Not yet implemented")
    }

    override fun serialize(encoder: Encoder, value: Partie<T>) {
        val out = encoder.beginStructure(descriptor)
        out.encodeSerializableElement(descriptor, 0, Player.serializer(), value.player)
        out.encodeSerializableElement(descriptor, 1, dataSerializer, value.level)
        out.encodeSerializableElement(descriptor, 2, PartieStatus.serializer(), value.status)
        out.endStructure(descriptor)
    }
}

@Serializer(forClass = CompositeZone::class)
class CompositeZoneSerializer() : KSerializer<CompositeZone> {
    override val descriptor: SerialDescriptor = buildClassSerialDescriptor("CompositeZone") {
        element("x", Int.serializer().descriptor)
        element("y", Int.serializer().descriptor)
        element("content", listSerialDescriptor(ObjectZoneSerializer().descriptor))
        element("connections", mapSerialDescriptor(String.serializer().descriptor, PointImpl.serializer().descriptor))
        element("connected", ListSerializer(PointImpl.serializer()).descriptor)
    }

    override fun deserialize(decoder: Decoder): CompositeZone {
        TODO("Not yet implemented")
    }

    override fun serialize(encoder: Encoder, value: CompositeZone) {
        val out = encoder.beginStructure(descriptor)
        out.encodeIntElement(descriptor, 0, value.x)
        out.encodeIntElement(descriptor, 1, value.y)
        out.encodeSerializableElement(
            descriptor,
            2,
            ListSerializer(ObjectZoneSerializer()),
            value.content.toList()
        )
        out.encodeSerializableElement(
            descriptor,
            3,
            MapSerializer(Direction.serializer(), PointImpl.serializer()),
            value.connections
        )
        out.encodeSerializableElement(
            descriptor,
            4,
            ListSerializer(PointImpl.serializer()),
            value.connected
        )

        out.endStructure(descriptor)
    }
}


@JsExport
@Serializer(forClass = LevelBoard::class)
class LevelBoardSerializer<T : Any>(private val dataSerializer: KSerializer<T>) : KSerializer<LevelBoard<T>> {
    // TODO removal of explicit type crashes the compiler
    override val descriptor: SerialDescriptor = buildClassSerialDescriptor("LevelBoard") {
        element("width", Int.serializer().descriptor)
        element("height", Int.serializer().descriptor)
        element("content", listSerialDescriptor(dataSerializer.descriptor))
        element("exit", dataSerializer.descriptor)
        element("start", dataSerializer.descriptor)
    }

    override fun deserialize(decoder: Decoder): LevelBoard<T> {
        TODO("Not yet implemented")
    }

    override fun serialize(encoder: Encoder, value: LevelBoard<T>) {
        val out = encoder.beginStructure(descriptor)
        out.encodeIntElement(descriptor, 0, value.width)
        out.encodeIntElement(descriptor, 1, value.height)
        out.encodeSerializableElement(
            descriptor,
            2,
            ListSerializer(ListSerializer(dataSerializer)),
            value.content.toList()
        )
        out.encodeSerializableElement(descriptor, 3, dataSerializer, value.start)
        out.encodeSerializableElement(descriptor, 4, dataSerializer, value.exit)
        // out.encodeStringElement(descriptor, 1, InternalHexConverter.printHexBinary(value.checkSum))
        out.endStructure(descriptor)
    }
}


@Serializer(forClass = ObjectZone::class)
class ObjectZoneSerializer : KSerializer<ObjectZone> {
    // TODO removal of explicit type crashes the compiler
    override val descriptor: SerialDescriptor = ObjectZone.serializer().descriptor

    override fun deserialize(decoder: Decoder): ObjectZone {

        return ObjectZone.serializer().deserialize(decoder);
    }

    override fun serialize(encoder: Encoder, value: ObjectZone) {
        if (value is DoorObjectZone) {
            val out = encoder.beginStructure(DoorObjectZone.serializer().descriptor)
            out.encodeStringElement(DoorObjectZone.serializer().descriptor, 0, value.name)
            out.encodeStringElement(DoorObjectZone.serializer().descriptor, 1, value.type!!)
            out.encodeSerializableElement(
                DoorObjectZone.serializer().descriptor,
                2,
                PointImpl.serializer(),
                value.destination as PointImpl
            )
            if (value.key != null) {
                out.encodeSerializableElement(
                    DoorObjectZone.serializer().descriptor,
                    3,
                    KeyObjectZone.serializer(),
                    value.key as KeyObjectZone
                )
            }
            out.endStructure(descriptor)
//            DoorObjectZone.serializer().serialize(encoder, value)
        } else if (value is KeyObjectZone) {
            KeyObjectZone.serializer().serialize(encoder, value)
        } else if (value is ExchangeObjectZone) {
            ExchangeObjectZone.serializer().serialize(encoder, value)
        } else {
            ObjectZone.serializer().serialize(encoder, value)
        }

    }
}

@JsExport
fun deserialize(str: String, partie: Partie<*>): Any {
    if (str.contains("{")) {
        var element = Json.parseToJsonElement(str)
        val type = element.jsonObject["type"]?.jsonPrimitive?.content ?: "notype"
        if (type == "door") {
            var x = element.jsonObject["destination"]!!.jsonObject["x"]!!.jsonPrimitive.content.toInt()
            var y = element.jsonObject["destination"]!!.jsonObject["y"]!!.jsonPrimitive.content.toInt()
            return partie.player.location.content.filterIsInstance<DoorObjectZone>()
                .find { (it.destination as BoardZone).x == x && (it.destination as BoardZone).y == y }!!
        } else {
            var name: String = element.jsonObject["name"]?.jsonPrimitive?.content ?: ""

            return partie.player.location.content.filter { !(it is DoorObjectZone) }
                .find { it.name == name }!!
        }
        return partie.player.location.content.find { it.equals(element) }!!
    } else {
        println(str)
        println(Direction.valueOf(str))
        return Direction.valueOf(str)
    }
}

private val LOGGER = KotlinLogging.logger {}
