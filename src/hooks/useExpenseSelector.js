import useExpense from './useExpense'

export default function useExpenseSelector({ day, month, year } = {}) {
  const expenses = useExpense()
  return expenses.filter(({ date = {} }) => {
    return (
      (!day || date.date === day) &&
      (!month || date.month === month) &&
      (!year || date.year === year)
    )
  })
}
