import moment from 'moment'

function getDatesOfMonth(date) {
  // create new array of size 7
  const newWeek = () => {
    const week = []
    const weekdays = [0, 1, 2, 3, 4, 5, 6]
    weekdays.forEach((key) => {
      week[key] = null
    })
    return week
  }
  const roundWeekdays = (week) => {
    return week.map((day) =>
      day ? moment(day).startOf('date').toDate() : null,
    )
  }
  const isSameMonth = (dateToValidate, monthToMatch) => {
    return dateToValidate.month() === moment(monthToMatch).month()
  }

  const currentDate = moment(date).date(1)
  const calender = []
  let week = newWeek()
  const lastDayOfWeek = 6

  while (isSameMonth(currentDate, date)) {
    const day = currentDate.day()
    week[day] = currentDate.toDate()
    currentDate.add(1, 'day')
    if (day === lastDayOfWeek || !isSameMonth(currentDate, date)) {
      calender.push(roundWeekdays(week))
      week = newWeek()
    }
  }

  return calender
}

function monthNameFromNumber(month) {
  return moment().month(month).format('MMMM')
}

export { getDatesOfMonth, monthNameFromNumber }
