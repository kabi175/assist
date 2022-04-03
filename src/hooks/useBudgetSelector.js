import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function useBudgetSelector({ day, month, year } = {}) {
  const { budget: budgets } = useSelector((state) => state.budget)
  const [budget, setBudget] = useState([])
  useEffect(() => {
    if (budgets.length === 0) return
    const expenseFiltered = budgets.filter(({ date = {} }) => {
      return (
        (!day || date.day === day)
        && (!month || date.month === month)
        && (!year || date.year === year)
      )
    })
    setBudget(expenseFiltered)
  }, [budgets])
  return budget
}
