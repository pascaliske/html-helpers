import classNames from 'classnames'

/**
 * Namespaces all properties of the given map.
 *
 * @param prefix - The prefix to prepend.
 * @param map - A class map object for prefixing.
 * @returns A prefixed class name map.
 */
export function namespace(prefix: string, map: Record<string, boolean>): string {
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
export function stringToMap(themes: string = ''): Record<string, boolean> {
    const reducer = (prev: any, curr: string) => ({ ...prev, [curr]: true })

    if (themes === '') {
        return {}
    }

    return themes
        .replace(/ +/g, '')
        .split(',')
        .reduce(reducer, {})
}
