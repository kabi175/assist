/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  expenses: [],
}

// ------------------------------------
// Slice
// ------------------------------------

const appSlice = createSlice({
  name: 'expense',
  initialState,

  reducers: {
    clear: (state) => {
      state.expenses = []
    },
    addExpense: (state, { payload }) => {
      state.expenses = [...state.expenses, payload]
    },
    removeExpense: (state, { payload }) => {
      state.expenses = state.expenses.filter((item) => item.id !== payload._id)
    },
    editExpense: (state, { payload }) => {
      state.expenses = state.expenses.map((item) => {
        if (item._id === payload._id) {
          return payload
        }
        return item
      })
    },
  },
})

export const { actions } = appSlice
export const { addExpense, removeExpense, editExpense, clear } = appSlice.actions

export default appSlice.reducer
