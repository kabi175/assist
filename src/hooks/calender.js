import moment from 'moment'

const newWeek = () => {
  const week = []
  const weekdays = [0, 1, 2, 3, 4, 5, 6]
  weekdays.forEach((key) => {
    week[key] = null
  })
  return week
}

const isSameMonth = (date, month) => date.month() === moment().month(month).month()

function useCalender(month, year) {
  const startDate = moment().month(month).year(year).date(1)
  const calender = []
  let week = newWeek()
  while (isSameMonth(startDate, month, year)) {
    const date = startDate.date()
    const day = startDate.day()
    week[day] = date
    startDate.add(1, 'day')
    if (day === 6 || isSameMonth(startDate, month) === false) {
      calender.push(week)
      week = newWeek()
    }
  }
  return calender
}

function nextMonth(month, year) {
  return moment().month(month).year(year).date(1)
    .add(1, 'month')
}

function prevMonth(month, year) {
  return moment().month(month).year(year).date(1)
    .subtract(1, 'month')
}

function monthNameFromMoment(date) {
  return date.format('MMMM')
}

function monthNameFromNumber(month) {
  return moment().month(month).format('MMMM')
}

export default {
  useCalender,
  nextMonth,
  prevMonth,
  monthNameFromMoment,
  monthNameFromNumber,
}
