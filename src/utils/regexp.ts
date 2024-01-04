/**
 * @example
 * '/abc/g' -> /abc/g
 */
const stringToRegexp = (str: string) => {
  const lastSlash = str.lastIndexOf('/')
  return new RegExp(str.slice(1, lastSlash), str.slice(lastSlash + 1))
}

/**
 * Makes single-char regular express optional
 * @example
 * /\d/ -> /\d?/
 */
export const makeRegexpOptional = (charRegexp: string | RegExp) =>
  stringToRegexp(charRegexp.toString().replace(/.(\/)[gmiyus]{0,6}$/, (match) => match.replace('/', '?/')))

const escapeIfNeeded = (char: string) => ('[\\^$.|?*+()'.indexOf(char) > -1 ? `\\${char}` : char)

/**
 * Wraps static character to RegExp
 */
const charRegexp = (char: string) => new RegExp(`/[${escapeIfNeeded(char)}]/`)

export const castToRegexp = (char: string | RegExp) => (char instanceof RegExp ? char : charRegexp(char))
