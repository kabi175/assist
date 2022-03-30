import moment from 'moment'

export function obj2moment(obj) {
  return moment()
    .date(obj.date.date)
    .month(obj.date.month)
    .year(obj.date.year)
    .startOf('day')
}

export function moment2obj(date) {
  return {
    date: date.date(),
    month: date.month(),
    year: date.year(),
  }
}

export function month2Str(month) {
  return moment().month(month).format('MMMM')
}

export function dmy2day({ date, month, year }) {
  return moment().month(month).year(year).date(date)
    .format('dddd')
}
