import { datesOfMonth } from 'service/date'
import useExpenseSelector from './useExpenseSelector'

export default function useExpenseStatsSelector(month, year) {
  const dates = datesOfMonth(month, year)
  return dates.map((day) => {
    const expense = useExpenseSelector({
      day,
      month,
      year,
    })
    return {
      date: {
        date: day,
        month,
        year,
      },
      entries: expense,
    }
  })
}
