import test from 'ava'
import { modifiers, join } from '../dist'

test('modifiers: return empty space', async t => {
    const expected = ''
    const result = modifiers()

    t.is(result, expected)
})

test('modifiers: return modifiers with namespace', async t => {
    const expected = 'cmp-demo cmp-demo--foo cmp-demo--baz'
    const result = modifiers('cmp-demo', {
        foo: true,
        bar: false,
        baz: true,
    })

    t.is(result, expected)
})

test('modifiers: return modifiers without namespace', async t => {
    const expected = 'foo baz'
    const result = modifiers({
        foo: true,
        bar: false,
        baz: true,
    })

    t.is(result, expected)
})

test('modifiers: return modifiers with theme string and classes map', async t => {
    const expected = 'cmp-demo cmp-demo--primary cmp-demo--full-width cmp-demo--foo cmp-demo--baz'
    const result = modifiers('cmp-demo', 'primary,full-width', {
        foo: true,
        bar: false,
        baz: true,
    })

    t.is(result, expected)
})

test('modifiers: return modifiers with empty theme string and classes map', async t => {
    const expected = 'cmp-demo cmp-demo--foo cmp-demo--baz'
    const result = modifiers('cmp-demo', '', {
        foo: true,
        bar: false,
        baz: true,
    })

    t.is(result, expected)
})

test('modifiers: return modifiers with undefined theme string and classes map', async t => {
    const expected = 'cmp-demo cmp-demo--foo cmp-demo--baz'
    const result = modifiers('cmp-demo', undefined, {
        foo: true,
        bar: false,
        baz: true,
    })

    t.is(result, expected)
})

test('modifiers: return modifiers with theme string but without classes map', async t => {
    const expected = 'cmp-demo cmp-demo--primary cmp-demo--full-width'
    const result = modifiers('cmp-demo', 'primary,full-width')

    t.is(result, expected)
})

test('join: returns an empty class string', async t => {
    const expected = ''
    const result = join()

    t.is(result, expected)
})

test('join: returns an class string with two given classes', async t => {
    const expected = 'foo bar'
    const result = join('foo', 'bar')

    t.is(result, expected)
})

test('join: returns an class string with one of two given duplicate classes', async t => {
    const expected = 'foo'
    const result = join('foo', 'foo')

    t.is(result, expected)
})

test('join: returns an class string with multiple classes in arrays', async t => {
    const expected = 'foo bar baz'
    const result = join('foo', ['bar'], 'baz')

    t.is(result, expected)
})

test('join: returns an class string with multiple classes in arrays and duplicates', async t => {
    const expected = 'foo bar baz'
    const result = join('foo', ['bar'], 'baz', ['foo'])

    t.is(result, expected)
})
