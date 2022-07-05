import { isSameDate } from 'service/date'
import useBudget from './useBudget'

export default function (month, year) {
  const budgets = useBudget()
  return budgets
    .filter(({ date, amount }) => {
      const res = isSameDate(date, {
        month,
        year,
      })
      console.log(amount, res)
      return res
    })
    .reduce((sum, e) => sum + e.amount, 0)
}
