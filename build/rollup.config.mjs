import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  plugins: [
    resolve({ browser: true }),
    typescript({ compilerOptions: { lib: ['es5', 'es6', 'dom'], target: 'es5' } }),
    babel({ babelrc: true, babelHelpers: 'bundled' })
  ],
  output: [
    {
      format: 'umd',
      name: 'Vue3Mask',
      exports: 'named',
      file: 'dist/vue3-mask.js'
    },
    {
      format: 'esm',
      file: 'dist/vue3-mask.esm.js'
    }
  ]
}
