/**
 *
 * @param {string} amount
 * @returns {string}
 */
function formatAmountWithoutSeperator(amount) {
  if (!amount) return ''
  return amount.split(',').join('')
}

/**
 *
 * @param {number | string } amount
 * @returns { string }
 */
function formatAmountWithSeperator(amount) {
  if (!amount) return ''
  let str
  if (Number.isInteger(amount)) {
    str = amount.toString()
  } else {
    str = amount
  }
  str = formatAmountWithoutSeperator(str)
  let len = str.length
  let res = str.substring(len - 3, len)
  str = str.substring(0, len - 3)
  while (str !== '') {
    len = str.length
    res = `${str.substring(len - 2, len)},${res}`
    str = str.substring(0, len - 2)
  }
  console.log(res)
  return res
}

export { formatAmountWithSeperator, formatAmountWithoutSeperator }
