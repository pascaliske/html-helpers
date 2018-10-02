import * as classNames from 'classnames'
import { ClassesMap } from './styles'

/**
 * Namespaces all properties of the given map.
 *
 * @param prefix - The prefix to prepend.
 * @param map - A class map object for prefixing.
 * @returns A prefixed class name map.
 */
export function namespace(prefix: string, map: ClassesMap): string {
    const result = {}

    for (const modifier in map) {
        if (map.hasOwnProperty(modifier)) {
            result[`${prefix}--${modifier}`] = map[modifier]
        }
    }

    return classNames(prefix, result)
}

/**
 * Converts a comma separated string to a class map.
 *
 * @param themes - The comma separated string.
 * @returns A class name map.
 */
export function stringToMap(themes: string = ''): ClassesMap {
    const reducer = (prev, curr) => ({ ...prev, [curr]: true })

    if (themes === '') {
        return {}
    }

    return themes
        .replace(/ +/g, '')
        .split(',')
        .reduce(reducer, {})
}
