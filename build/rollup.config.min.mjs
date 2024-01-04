import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  plugins: [
    resolve({ browser: true }),
    typescript({ compilerOptions: { lib: ['es5', 'es6', 'dom'], target: 'es5' } }),
    babel({ babelrc: true, babelHelpers: 'bundled' }),
    terser(), // uglifyjs alternative with es6 support
  ],
  output: {
    format: 'umd',
    name: 'Vue3Mask',
    exports: 'named',
    file: 'dist/vue3-mask.min.js',
  },
}
