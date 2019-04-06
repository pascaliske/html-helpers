import classNames from 'classnames'
import { namespace, stringToMap } from './helpers'

export interface ClassesMap {
    [key: string]: boolean
}

/**
 * Returns the final class string for the given class name maps.
 *
 * @param map -
 * @returns A class string
 */
export function modifiers(map: ClassesMap): string

/**
 * Returns the final class string for the given class name maps.
 *
 * @param namespace - A namespace for prepending.
 * @param map - A class name map.
 * @returns A class string
 */
export function modifiers(namespace: string, map: ClassesMap): string

/**
 * Returns the final class string for the given class name maps.
 *
 * @param namespace - A namespace for prepending.
 * @param themes - A string of comma separated modifier classes.
 * @param map - A class name map.
 * @returns A class string
 */
export function modifiers(namespace: string, themes: string, map: ClassesMap): string
export function modifiers(
    namespaceOrMap: string | ClassesMap,
    themesOrMap?: string | ClassesMap,
    map?: ClassesMap,
): string {
    if (!namespaceOrMap) {
        return ''
    }

    if (typeof namespaceOrMap === 'object') {
        return classNames(namespaceOrMap)
    }

    if (typeof themesOrMap === 'object') {
        return namespace(namespaceOrMap, themesOrMap)
    }

    return namespace(namespaceOrMap, { ...stringToMap(themesOrMap), ...map })
}
