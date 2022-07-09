import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExpense, editExpense } from 'slices/expense.slice'
import {
  formatAmountWithoutSeperator,
  formatAmountWithSeperator,
} from 'service/amount'
import { roundDate } from 'service/date'
import useExpense from './useExpense'

export default function useEditExpense(id) {
  const dispatch = useDispatch()

  const expenseList = useExpense()

  const expense = expenseList.find(({ _id }) => _id === id) || {}

  const [amount_, setAmount_] = useState(
    formatAmountWithSeperator(expense.amount?.toString()) || '',
  )
  const [category_, setCategory_] = useState(expense.category || 'Other')
  const [description_, setDescription_] = useState(expense.description || '')
  const [date, setDate] = useState(expense.date || new Date())

  const submit = () => {
    const amount = parseInt(formatAmountWithoutSeperator(amount_), 10)
    if (Number.isNaN(amount)) return false
    if (id && expense) {
      dispatch(
        editExpense({
          _id: id || nanoid(),
          amount,
          date: roundDate(date),
          category: category_,
          description: description_,
        }),
      )
    } else {
      dispatch(
        addExpense({
          _id: id || nanoid(),
          amount,
          date: roundDate(date),
          category: category_,
          description: description_,
        }),
      )
    }
    return true
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
