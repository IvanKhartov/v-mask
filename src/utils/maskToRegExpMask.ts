import type { MaskReplacers } from '../types'
import { defaultMaskReplacers, NEXT_CHAR_OPTIONAL } from '../constants'
import { castToRegexp, makeRegexpOptional } from './regexp'

const maskToRegExpMask = (mask: Array<string | RegExp> | null, maskReplacers: MaskReplacers = defaultMaskReplacers) => {
  if (!mask) {
    return []
  }
  return mask
    .map((char, index, array) => {
      // @ts-expect-error Type `RegExp` cannot be used as an index type.
      const maskChar = maskReplacers[char] || char
      const previousChar = array[index - 1]
      // @ts-expect-error Type `RegExp` cannot be used as an index type.
      const previousMaskChar = maskReplacers[previousChar] || previousChar
      if (maskChar === NEXT_CHAR_OPTIONAL) {
        return null
      }
      if (maskChar && previousMaskChar === NEXT_CHAR_OPTIONAL) {
        return makeRegexpOptional(castToRegexp(maskChar as string | RegExp))
      }
      return maskChar
    })
    .filter(Boolean)
}

/**
 * Converts mask from `v-mask` string format to `text-mask-core` format
 */
export const stringMaskToRegExpMask = (stringMask: string, maskReplacers: MaskReplacers = defaultMaskReplacers) => {
  return maskToRegExpMask(stringMask.split(''), maskReplacers)
}

/**
 * Converts mask from `v-mask` array format to `text-mask-core` format
 */
export const arrayMaskToRegExpMask = (
  arrayMask: Array<string | RegExp>,
  maskReplacers: MaskReplacers = defaultMaskReplacers
) => {
  const flattenedMask = arrayMask
    .map((part) => {
      if (part instanceof RegExp) {
        return part
      }

      if (typeof part === 'string') {
        return part.split('')
      }
      return null
    })
    .filter(Boolean)
    .reduce((mask: Array<string | RegExp>, part) => mask.concat(part as Array<string | RegExp>), [])

  return maskToRegExpMask(flattenedMask, maskReplacers)
}
