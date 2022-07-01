import { useSelector } from 'react-redux'
import { isDate } from 'service/date'

export default function useExpense() {
  const expense = useSelector((state) => state.expense.expenses) || []
  return expense
    .map((e) => {
      if (isDate(e.date)) return e
      return {
        ...e,
        date: new Date(e.date),
      }
    })
    .filter(({ date }) => isDate(date))
}
