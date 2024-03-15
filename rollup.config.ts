import clear from 'rollup-plugin-clear'
import typescript from 'rollup-plugin-typescript2'
import terser from '@rollup/plugin-terser'

export default () => ({
    input: 'src/index.ts',
    output: [
        {
            format: 'es',
            file: 'dist/index.es.js',
        },
        {
            format: 'cjs',
            file: 'dist/index.js',
        },
        {
            format: 'umd',
            file: 'dist/index.umd.js',
            name: 'htmlHelpers',
            globals: {
                tslib: 'tslib',
                classnames: 'classNames',
            },
        },
    ],
    external: ['tslib', 'classnames'],
    plugins: [
        clear({
            targets: ['dist'],
            watch: true,
        }),
        typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
                exclude: ['rollup.config.ts'],
            },
        }),
        terser(),
    ],
})
