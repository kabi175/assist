import moment from 'moment'

/**
 *
 * @param {string} amount
 * @returns {string}
 */
function formatAmountWithoutSeperator(amount) {
  if (!amount) return ''
  console.log(amount, typeof amount)
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
  return res
}

function nextMonth(month, year) {
  return moment().month(month).year(year).date(1).add(1, 'month')
}

function prevMonth(month, year) {
  return moment().month(month).year(year).date(1).subtract(1, 'month')
}

export {
  formatAmountWithSeperator,
  formatAmountWithoutSeperator,
  nextMonth,
  prevMonth,
}
