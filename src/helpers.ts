import * as classNames from 'classnames'
import { ClassesMap } from './typings'

export function namespace(prefix: string, map: ClassesMap): string {
    const result = {}

    for (const modifier in map) {
        if (map.hasOwnProperty(modifier)) {
            result[`${prefix}--${modifier}`] = map[modifier]
        }
    }

    return classNames(prefix, result)
}

export function themesToMap(themes: string): ClassesMap {
    const reducer = (prev, curr) => ({ ...prev, [curr]: true })

    return themes
        .replace(/ +/g, '')
        .split(',')
        .reduce(reducer, {})
}
