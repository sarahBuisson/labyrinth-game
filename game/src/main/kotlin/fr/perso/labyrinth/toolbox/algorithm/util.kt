package fr.perso.labyrinth.toolbox.algorithm


/**
 * use filters until there is at least once value remaining
 */
fun <T> filterUntilOnce( toFilter: Collection<T>, vararg filters: (T) -> Boolean): Collection<T> {
    var _toFilter = toFilter;
    filters.forEach {
        var filtered = _toFilter.filter(it);
        if (filtered.isEmpty())
            return _toFilter;
        else
            _toFilter = filtered;
    }
    return _toFilter;

}
