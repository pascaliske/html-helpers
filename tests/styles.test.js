import test from 'ava'
import * as exports from '../dist'

test('return empty space', async t => {
    const expected = ''
    const result = exports.modifiers()

    t.is(result, expected)
})

test('return modifiers with namespace', async t => {
    const expected = 'cmp-demo cmp-demo--foo cmp-demo--baz'
    const result = exports.modifiers('cmp-demo', {
        foo: true,
        bar: false,
        baz: true
    })

    t.is(result, expected)
})

test('return modifiers without namespace', async t => {
    const expected = 'foo baz'
    const result = exports.modifiers({
        foo: true,
        bar: false,
        baz: true
    })

    t.is(result, expected)
})

test('return modifiers with theme string and classes map', async t => {
    const expected = 'cmp-demo cmp-demo--primary cmp-demo--full-width cmp-demo--foo cmp-demo--baz'
    const result = exports.modifiers('cmp-demo', 'primary,full-width', {
        foo: true,
        bar: false,
        baz: true
    })

    t.is(result, expected)
})

test('return modifiers with theme string but without classes map', async t => {
    const expected = 'cmp-demo cmp-demo--primary cmp-demo--full-width'
    const result = exports.modifiers('cmp-demo', 'primary,full-width')

    t.is(result, expected)
})
