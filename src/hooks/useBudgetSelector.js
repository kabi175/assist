import useBudget from './useBudget'

export default function useBudgetSelector({ day, month, year } = {}) {
  const budgets = useBudget()

  return budgets.filter(({ date }) => {
    return (
      date &&
      (!day || date.getDate() === day) &&
      (!month || date.getMonth() === month) &&
      (!year || date.getFullYear() === year)
    )
  })
}
