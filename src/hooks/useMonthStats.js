import { datesOfMonth, isSameDate } from 'service/date'
import useExpense from './useExpense'

export default function useMonthStats(month, year) {
  const expenses = useExpense()
  const dates = datesOfMonth(month, year)

  return dates.map((date) => {
    return {
      date,
      entries: expenses.filter((e) =>
        isSameDate(e.date, {
          date: date.getDate(),
          month: date.getMonth(),
          year: date.getYear(),
        }),
      ),
    }
  })
}