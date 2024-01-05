import { defaultMaskReplacers, NEXT_CHAR_OPTIONAL } from './constants'

export type InputMask = string | Array<string | RegExp> | (() => void) | null
export type Mask = string | Array<string | RegExp>
export type MaskElement = HTMLElement | HTMLInputElement
export type MaskReplacers = Record<string, RegExp | typeof NEXT_CHAR_OPTIONAL | null>
export type PluginOptions = {
  placeholders?: typeof defaultMaskReplacers
}
export type Options = {
  previousValue?: string
  mask?: Array<string | RegExp>
}
export type OptionsMap = Map<HTMLElement | HTMLInputElement, Options>
export type OptionsGet = (el: MaskElement) => Options
export type OptionsPartiallyUpdate = (el: MaskElement, newOptions: Options) => void
export type OptionsRemove = (el: MaskElement) => void
export interface CreateOptions {
  get: OptionsGet
  remove: OptionsRemove
  partiallyUpdate: OptionsPartiallyUpdate
}
export type { Directive, Plugin } from '@vue/runtime-core'
