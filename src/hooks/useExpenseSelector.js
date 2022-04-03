import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function useExpenseSelector({ day, month, year } = {}) {
  const { expenses } = useSelector((state) => state.expense)
  const [expense, setExpense] = useState([])
  useEffect(() => {
    const expenseR = expenses.filter(({ date = {} }) => {
      return (
        (!day || date.day === day)
        && (!month || date.month === month)
        && (!year || date.year === year)
      )
    })
    setExpense(expenseR)
  }, [expenses])
  return expense
}
