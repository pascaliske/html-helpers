import expect from 'expect'
import { modifiers, join } from '../src'

test('modifiers: return empty space', async () => {
    const expected = ''
    const result = modifiers()

    expect(result).toBe(expected)
})

test('modifiers: return modifiers with namespace', async () => {
    const expected = 'cmp-demo cmp-demo--foo cmp-demo--baz'
    const result = modifiers('cmp-demo', {
        foo: true,
        bar: false,
        baz: true,
    })

    expect(result).toBe(expected)
})

test('modifiers: return modifiers without namespace', async () => {
    const expected = 'foo baz'
    const result = modifiers({
        foo: true,
        bar: false,
        baz: true,
    })

    expect(result).toBe(expected)
})

test('modifiers: return modifiers with theme string and classes map', async () => {
    const expected = 'cmp-demo cmp-demo--primary cmp-demo--full-width cmp-demo--foo cmp-demo--baz'
    const result = modifiers('cmp-demo', 'primary,full-width', {
        foo: true,
        bar: false,
        baz: true,
    })

    expect(result).toBe(expected)
})

test('modifiers: return modifiers with empty theme string and classes map', async () => {
    const expected = 'cmp-demo cmp-demo--foo cmp-demo--baz'
    const result = modifiers('cmp-demo', '', {
        foo: true,
        bar: false,
        baz: true,
    })

    expect(result).toBe(expected)
})

test('modifiers: return modifiers with undefined theme string and classes map', async () => {
    const expected = 'cmp-demo cmp-demo--foo cmp-demo--baz'
    const result = modifiers('cmp-demo', undefined, {
        foo: true,
        bar: false,
        baz: true,
    })

    expect(result).toBe(expected)
})

test('modifiers: return modifiers with theme string but without classes map', async () => {
    const expected = 'cmp-demo cmp-demo--primary cmp-demo--full-width'
    const result = modifiers('cmp-demo', 'primary,full-width')

    expect(result).toBe(expected)
})

test('join: returns an empty class string', async () => {
    const expected = ''
    const result = join()

    expect(result).toBe(expected)
})

test('join: returns an class string with two given classes', async () => {
    const expected = 'foo bar'
    const result = join('foo', 'bar')

    expect(result).toBe(expected)
})

test('join: returns an class string with one of two given duplicate classes', async () => {
    const expected = 'foo'
    const result = join('foo', 'foo')

    expect(result).toBe(expected)
})

test('join: returns an class string with multiple classes in arrays', async () => {
    const expected = 'foo bar baz'
    const result = join('foo', ['bar'], 'baz')

    expect(result).toBe(expected)
})

test('join: returns an class string with multiple classes in arrays and duplicates', async () => {
    const expected = 'foo bar baz'
    const result = join('foo', ['bar'], 'baz', ['foo'])

    expect(result).toBe(expected)
})

test('join: returns an class string without empty strings', async () => {
    const expected = 'foo'
    const result = join('', null, 'foo', null)

    expect(result).toBe(expected)
})
