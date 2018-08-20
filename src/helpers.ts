import * as classNames from 'classnames'

export function namespace(prefix: string, map: object): string {
    const result = {}

    for (const modifier in map) {
        if (map.hasOwnProperty(modifier)) {
            result[`${prefix}--${modifier}`] = map[modifier]
        }
    }

    return classNames(prefix, result)
}

export function stringToMap(themes: string): object {
    const reducer = (prev, curr) => ({ ...prev, [curr]: true })

    return themes
        .replace(/ +/g, '')
        .split(',')
        .reduce(reducer, {})
}
