import { useDispatch } from 'react-redux'
import { actions as budget } from 'slices/budget.slice'
import { actions as expense } from 'slices/expense.slice'

export default function useClear() {
  const dispatch = useDispatch()
  return () => {
    dispatch(budget.clear())
    dispatch(expense.clear())
  }
}
