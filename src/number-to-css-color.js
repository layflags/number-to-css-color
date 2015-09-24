/**
* Converts a number to a CSS hex color
*
* @param {Number} num - The number to convert
* @param {Boolean} [options.alpha=false] - Sets output format to 8 digits (CSS4)
* @return {String} A CSS hex color representation
* @example
*   numberToCssColor(0xf) // -> "#00000f"
*   numberToCssColor(0x10c, {alpha: true}) // -> "#0000010c"
*/
export default function numberToCssColor (num, {alpha = false} = {}) {
  if (!Number.isInteger(num)) {
    throw new Error('expecting integer value')
  }

  const digits = alpha ? 8 : 6

  return '#' + ('0000000' + num.toString(16)).slice(-digits)
}

