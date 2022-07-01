import moment from 'moment'
import * as util from 'util'

export function roundDate(date) {
  return moment(date).startOf('date').toDate()
}

export function month2Str(month) {
  return moment().month(month).format('MMMM')
}

export function dmy2day({ date, month, year }) {
  return moment().month(month).year(year).date(date).format('dddd')
}

export function datesOfMonth(month, year) {
  const start = moment().month(month).year(year).startOf('month')
  const end = moment().month(month).endOf('month')
  const dates = []
  while (start <= end) {
    dates.push(start.date())
    start.add(1, 'days')
  }
  return dates
}

export function nextMonth(date) {
  return moment(date).add(1, 'month').toDate()
}

export function previousMonth(date) {
  return moment(date).subtract(1, 'month').toDate()
}

export function nextYear(date) {
  return moment(date).add(1, 'year').toDate()
}

export function previousYear(date) {
  return moment(date).subtract(1, 'year').toDate()
}

export function isSameMonth(date, month, year) {
  if (!date) return false
  return date.getMonth() === month && date.getFullYear() === year
}

export const isDate = (date) => util.isDate(date)
