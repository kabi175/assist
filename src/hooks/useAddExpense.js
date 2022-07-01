import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from 'slices'
import { formatAmountWithoutSeperator } from 'service/amount'
import { roundDate } from '../service/date'

export default function useAddExpense() {
  const dispatch = useDispatch()

  const [amount_, setAmount_] = useState('')
  const [category_, setCategory_] = useState('Other')
  const [description_, setDescription_] = useState('')
  const [date, setDate] = useState(new Date())

  const submit = () => {
    const amount = parseInt(formatAmountWithoutSeperator(amount_), 10)
    if (!Number.isNaN(amount)) {
      dispatch(
        actions.addExpense({
          _id: nanoid(),
          amount,
          date: roundDate(date),
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
    useDate: () => {
      return [date, setDate]
    },
    submit,
  }
}
