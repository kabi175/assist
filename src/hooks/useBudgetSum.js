import useBudget from './useBudget'
import { isSameMonth } from '../service/date'

export default function (month, year) {
  const budgets = useBudget()

  return budgets
    .filter(({ date }) => isSameMonth(date, month, year))
    .reduce((sum, e) => sum + e.amount, 0)
}
