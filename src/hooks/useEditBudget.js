import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { formatAmountWithoutSeperator } from 'service/amount'
import { addBudget, editBudget } from 'slices/budget.slice'
import useBudget from './useBudget'

export default function useEditBudget(id) {
  const dispatch = useDispatch()

  const budgetList = useBudget()

  const budget = budgetList.find((b) => b._id === id) || {}

  const [amount_, setAmount_] = useState(
    formatAmountWithoutSeperator(budget?.amount?.toString() || ''),
  )

  const submit = () => {
    const amount = parseInt(formatAmountWithoutSeperator(amount_), 10)
    if (Number.isNaN(amount)) return false

    if (id) {
      dispatch(
        editBudget({
          _id: id,
          amount,
        }),
      )
    } else {
      dispatch(
        addBudget({
          _id: nanoid(),
          date: new Date(),
          amount,
        }),
      )
    }
    return true
  }

  return {
    useAmount: () => [amount_, setAmount_],
    submit,
  }
}
