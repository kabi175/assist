import { datesOfMonth, isSameDate } from 'service/date'
import moment from 'moment'
import useExpense from './useExpense'

export default function useMonthStats(month, year) {
  const expenses = useExpense()
  const dates = datesOfMonth(month, year)

  return dates.map((date) => {
    return {
      date: moment().date(date).month(month).year(year).toDate(),
      entries: expenses.filter((e) =>
        isSameDate(e.date, {
          date,
          month,
          year,
        }),
      ),
    }
  })
}
