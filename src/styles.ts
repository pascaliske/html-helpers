import * as classNames from 'classnames'
import { namespace, stringToMap } from './helpers'

export interface ClassesMap {
    [key: string]: boolean
}

export function modifiers(map: ClassesMap): string
export function modifiers(namespace: string, map: ClassesMap): string
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

    return namespace(namespaceOrMap, {
        ...stringToMap(themesOrMap),
        ...map,
    })
}
