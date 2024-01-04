import type { CreateOptions, Options, OptionsGet, OptionsMap, OptionsPartiallyUpdate, OptionsRemove } from './types'

export default function createOptions(): CreateOptions {
  const elementOptions: OptionsMap = new Map()
  const defaultOptions: Options = { previousValue: '', mask: [] }

  const get: OptionsGet = (el) => {
    return elementOptions.get(el) || { ...defaultOptions }
  }

  const partiallyUpdate: OptionsPartiallyUpdate = (el, newOptions) => {
    elementOptions.set(el, { ...get(el), ...newOptions })
  }

  const remove: OptionsRemove = (el) => {
    elementOptions.delete(el)
  }

  return { get, remove, partiallyUpdate }
}
