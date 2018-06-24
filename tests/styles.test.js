import test from 'ava'
import * as exports from '../dist'

test('modifiers', async t => {
    const expected = 'cmp-demo--foo cmp-demo--baz'
    const result = exports.modifiers('cmp-demo', {
        foo: true,
        bar: false,
        baz: true
    })

    t.is(result, expected)
})
