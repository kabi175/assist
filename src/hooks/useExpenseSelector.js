import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function useExpenseSelector({ day, month, year } = {}) {
  const { expenses } = useSelector((state) => state.expense)
  const [expense, setExpense] = useState([])
  useEffect(() => {
    if (expenses.length === 0) return
    const expenseR = expenses.filter((exp) => {
      return (
        (!exp.day || exp.day === day)
        && (!exp.month || exp.month === month)
        && (!exp.year || exp.year === year)
      )
    })
    setExpense(expenseR)
  }, [expenses])
  return expense
}
