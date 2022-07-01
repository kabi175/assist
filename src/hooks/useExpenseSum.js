import { isSameMonth } from 'service/date'
import useExpense from './useExpense'

export default function useExpenseSum(month, year) {
  const expenses = useExpense()
  return expenses
    .filter(({ date }) => isSameMonth(date, month, year))
    .reduce((sum, e) => sum + e.amount, 0)
}
