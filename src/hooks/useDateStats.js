import { isSameDate } from 'service/date'
import useExpense from './useExpense'

export default function useStats(date, month, year) {
  const expenses = useExpense()
  return expenses.filter((e) =>
    isSameDate(e.date, {
      date,
      month,
      year,
    }),
  )
}
