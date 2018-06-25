import * as classNames from 'classnames'

export interface ClassesMap {
    [key: string]: boolean
}

export function modifiers(map: ClassesMap): string
export function modifiers(namespace: string, map: ClassesMap): string
export function modifiers(namespaceOrMap: string | ClassesMap, map?: ClassesMap): string {
    if (typeof namespaceOrMap === 'object') {
        return classNames(namespaceOrMap)
    }

    const result = {}

    for (const modifier in map) {
        if (map.hasOwnProperty(modifier)) {
            result[`${namespaceOrMap}--${modifier}`] = map[modifier]
        }
    }

    return classNames(namespaceOrMap, result)
}
