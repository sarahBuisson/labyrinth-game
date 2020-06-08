package fr.perso.labyrinth.freezone.generation

import fr.perso.labyrinth.ConnectedZone
import fr.perso.labyrinth.board.algorithm.dataMap.distanceMap
import fr.perso.labyrinth.freezone.model.ObjectZone
import org.jeasy.rules.api.Condition


fun extractPathFromTo(start: ConnectedZone, exit: ConnectedZone): List<ConnectedZone> {
    throw NotImplementedError()
}

fun findBestPlaceToHideKey(doorZone: ConnectedZone, closedZone: ConnectedZone, filters:List<(ConnectedZone) -> kotlin.Boolean> ):ConnectedZone
{
    throw NotImplementedError()
}


fun fillWithDoorAndKey(zones: List<ConnectedZone>, start: ConnectedZone, exit: ConnectedZone, keys: List<ObjectZone>) {
    val path = extractPathFromTo(start, exit).reversed();
    for (i in 0..path.size - 2) {

        val closedZone: ConnectedZone = path.get(i)
        val doorZone: ConnectedZone = path.get(i + 1)

    }

}
