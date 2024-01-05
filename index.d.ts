import { MaskElement, PluginOptions } from './src/types'
import { Directive, Plugin } from 'vue'

declare const Vue3Mask: Plugin<PluginOptions & undefined>
declare const Vue3MaskPlugin: Plugin<PluginOptions & undefined>
declare const Vue3MaskDirective: Directive<MaskElement>

export { Vue3MaskPlugin, Vue3MaskDirective }
export default Vue3Mask
