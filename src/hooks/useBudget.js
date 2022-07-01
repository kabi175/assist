import { useSelector } from 'react-redux'
import { isDate } from 'service/date'

export default function useBudget() {
  const budget = useSelector((state) => state.budget.budget) || []
  return budget
    .map((e) => {
      if (isDate(e.date)) return e
      return {
        ...e,
        date: new Date(e.date),
      }
    })
    .filter(({ date }) => isDate(date))
}
