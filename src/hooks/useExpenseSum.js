import { isSameDate } from 'service/date'
import useExpense from './useExpense'

export default function useExpenseSum(month, year) {
  const expenses = useExpense()
  return expenses
    .filter(({ date }) =>
      isSameDate(date, {
        month,
        year,
      }),
    )
    .reduce((sum, e) => sum + e.amount, 0)
}
