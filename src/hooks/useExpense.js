import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from 'slices'
import { formatAmountWithoutSeperator } from 'service/amount'

export default function useExpense() {
  const dispatch = useDispatch()
  const date = useSelector((state) => state.calender.selected)

  const [amount_, setAmount_] = useState('')
  const [category_, setCategory_] = useState('Other')
  const [description_, setDescription_] = useState('')

  const submit = () => {
    const amount = parseInt(formatAmountWithoutSeperator(amount_), 10)
    if (!Number.isNaN(amount)) {
      dispatch(
        actions.addExpense({
          _id: nanoid(),
          amount,
          date,
          category: category_,
          description: description_,
        }),
      )
      return true
    }
    return false
  }

  return {
    useAmount: () => {
      return [amount_, setAmount_]
    },
    useCategory: () => {
      return [category_, setCategory_]
    },
    useDescription: () => {
      return [description_, setDescription_]
    },
    submit,
  }
}
