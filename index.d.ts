import { Directive, MaskElement, Plugin, PluginOptions } from './src/types'

declare const Vue3Mask: Plugin<PluginOptions>
declare const Vue3MaskPlugin: Plugin<PluginOptions>
declare const Vue3MaskDirective: Directive<MaskElement>

export { Vue3MaskPlugin, Vue3MaskDirective }
export default Vue3Mask
