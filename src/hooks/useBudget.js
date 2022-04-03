import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from 'slices'
import { formatAmountWithoutSeperator } from 'service/amount'

export default function useBudget() {
  const dispatch = useDispatch()
  const date = useSelector((state) => state.calender.selected)
  const [amount_, setAmount_] = useState('')
  const submit = () => {
    const amount = parseInt(formatAmountWithoutSeperator(amount_), 10)
    if (!Number.isNaN(amount)) {
      dispatch(
        actions.addBudget({
          _id: nanoid(),
          date,
          amount,
        }),
      )
      return true
    }
    return false
  }

  return {
    useAmount: () => [amount_, setAmount_],
    submit,
  }
}
