import * as classNames from 'classnames'

export interface ClassesMap {
    [key: string]: boolean
}

export function modifiers(namespace: string, map: ClassesMap): string {
    const result = {}

    for (const modifier in map) {
        if (map.hasOwnProperty(modifier)) {
            result[`${namespace}--${modifier}`] = map[modifier]
        }
    }

    return classNames(result)
}
