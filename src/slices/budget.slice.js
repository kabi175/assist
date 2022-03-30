/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  budget: [],
}

// ------------------------------------
// Slice
// ------------------------------------

const appSlice = createSlice({
  name: 'budget',
  initialState,

  reducers: {
    addBudget: (state, { payload }) => {
      state.budget = [...state.budget, payload]
    },
    removeBudget: (state, { payload }) => {
      state.budget = state.budget.filter((item) => item.id !== payload._id)
    },
    editBudget: (state, { payload }) => {
      state.budget = state.budget.map((item) => {
        if (item._id === payload._id) {
          return payload
        }
        return item
      })
    },
  },
})

export const { action } = appSlice

export const { addBudget, removeBudget, editBudget } = appSlice.actions

export default appSlice.reducer
