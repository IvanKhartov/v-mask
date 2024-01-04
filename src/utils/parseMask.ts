import type { InputMask, MaskReplacers } from '../types'
import { arrayMaskToRegExpMask, stringMaskToRegExpMask } from './maskToRegExpMask'
import { isFunction, isString } from './index'

export const parseMask = (inputMask: InputMask, maskReplacers: MaskReplacers): RegExp[] | unknown => {
  if (Array.isArray(inputMask)) {
    return arrayMaskToRegExpMask(inputMask, maskReplacers)
  }

  if (isFunction(inputMask)) {
    return inputMask
  }

  if (inputMask && isString(inputMask) && inputMask.length > 0) {
    return stringMaskToRegExpMask(inputMask as string, maskReplacers)
  }
  return inputMask
}
