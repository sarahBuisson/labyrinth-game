package fr.perso.labyrinth.labeat.generation

import fr.perso.labyrinth.toolbox.algorithm.generation.LabFillerExit
import fr.perso.labyrinth.freezone.model.DoorObjectZone
import fr.perso.labyrinth.freezone.model.KeyObjectZone
import fr.perso.labyrinth.toolbox.algorithm.filterUntilOnce
import fr.perso.labyrinth.toolbox.algorithm.generation.doorWithKeyDefault
import fr.perso.labyrinth.toolbox.algorithm.generation.objetDiversDefault
import fr.perso.labyrinth.toolbox.model.Board
import fr.perso.labyrinth.toolbox.model.ConnectedZone
import fr.perso.labyrinth.toolbox.model.GeoZone
import kotlin.js.JsExport


@JsExport
class LabFillerMapLab<T>(
        keyToDoorArray: Array<Array<String>> = doorWithKeyDefault,
        objetDiversArray: Array<String> = objetDiversDefault, board: Board<T>
) : LabFillerExit<T>(keyToDoorArray, objetDiversArray)
        where T : GeoZone, T : ConnectedZone {


    override fun isZoneAvailable(it: T): Boolean {


        var zoneEmpty = it.content.filterIsInstance<KeyObjectZone>().isEmpty()
                && it.content.filterIsInstance<DoorObjectZone>().filter { it.key != null }.isEmpty()
                && it != this.begin

        return zoneEmpty;
    }


    override fun availableZonesToPutKeyToAccessZone(doorZone: T): Collection<T> {

        return filterUntilOnce(super.availableZonesToPutKeyToAccessZone(doorZone)
                .filter {!doorZone.connected.contains(it) && doorZone != it && begin as T != it },
                { it.content.none { obj -> obj is KeyObjectZone } },
                { !this.pathToExit.contains(it) }
        )
    }


}
