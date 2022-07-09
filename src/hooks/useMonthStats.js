import { datesOfMonth, isSameDate } from 'service/date'
import moment from 'moment'

export default function useMonthStats(entries, month, year) {
  const dates = datesOfMonth(month, year)

  return dates.map((date) => {
    return {
      date: moment().date(date).month(month).year(year).toDate(),
      entries: entries.filter((e) =>
        isSameDate(e.date, {
          date,
          month,
          year,
        }),
      ),
    }
  })
}
