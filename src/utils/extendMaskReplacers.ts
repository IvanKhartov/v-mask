import type { MaskReplacers } from '../types'
import { defaultMaskReplacers } from '../constants'

export const extendMaskReplacers = (
  maskReplacers?: MaskReplacers,
  baseMaskReplacers: MaskReplacers = defaultMaskReplacers
): MaskReplacers => {
  if (maskReplacers === null || Array.isArray(maskReplacers) || typeof maskReplacers !== 'object') {
    return baseMaskReplacers
  }

  return Object.keys(maskReplacers).reduce((extendedMaskReplacers, key) => {
    const value = maskReplacers[key]

    if (value !== null && !(value instanceof RegExp)) {
      return extendedMaskReplacers
    }

    return { ...extendedMaskReplacers, [key]: value }
  }, baseMaskReplacers)
}
