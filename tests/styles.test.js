import test from 'ava'
import * as exports from '../dist'

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
