import classNames from 'classnames'
import { namespace, stringToMap } from './helpers'

/**
 * Returns the final class string for the given class name maps.
 *
 * @param map - A map of class names and conditions.
 * @returns A class string
 */
export function modifiers(map: Record<string, boolean>): string
/**
 * Returns the final class string for the given class name maps.
 *
 * @param namespace - A namespace for prepending.
 * @param map - A map of class names and conditions.
 * @returns A class string
 */
export function modifiers(namespace: string, map: Record<string, boolean>): string
/**
 * Returns the final class string for the given class name maps.
 *
 * @param namespace - A namespace for prepending.
 * @param themes - A string of comma separated modifier classes.
 * @param map - A map of class names and conditions.
 * @returns A class string
 */
export function modifiers(namespace: string, themes: string, map: Record<string, boolean>): string
export function modifiers(
    namespaceOrMap: string | Record<string, boolean>,
    themesOrMap?: string | Record<string, boolean>,
    map?: Record<string, boolean>,
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
