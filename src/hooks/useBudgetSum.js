import { isSameDate } from 'service/date'
import useBudget from './useBudget'

export default function (month, year) {
  const budgets = useBudget()
  return budgets
    .filter(({ date }) => {
      return isSameDate(date, {
        month,
        year,
      })
    })
    .reduce((sum, e) => sum + e.amount, 0)
}
