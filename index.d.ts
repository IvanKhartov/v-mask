import { Directive, MaskElement, Plugin, PluginOptions } from './src/types'

declare const Vue3Mask: Plugin<PluginOptions & undefined>
declare const Vue3MaskPlugin: Plugin<PluginOptions & undefined>
declare const Vue3MaskDirective: Directive<MaskElement>

export { Vue3Mask as default, Vue3MaskPlugin, Vue3MaskDirective }
