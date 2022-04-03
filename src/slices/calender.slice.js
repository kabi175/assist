/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  current: {
    month: moment().month(),
    year: moment().year(),
    date: moment().date(),
  },
  selected: {
    month: moment().month(),
    year: moment().year(),
    date: moment().date(),
  },
}

// ------------------------------------
// Slice
// ------------------------------------

const appSlice = createSlice({
  name: 'calender',
  initialState,

  reducers: {
    setCalender: (state, { payload }) => {
      state.current.month = payload.month
      state.current.year = payload.year
      state.current.date = payload.date
    },
    setCalenderDate: (state, { payload }) => {
      state.current.date = payload.date
    },
    setCalenderMonth: (state, { payload }) => {
      state.current.month = payload.month
    },
    setCalenderYear: (state, { payload }) => {
      state.current.year = payload.year
    },
    incrementCalenderYear: (state) => {
      state.current.year += 1
    },
    decrementCalenderYear: (state) => {
      state.current.year -= 1
    },
    incrementCalenderMonth: (state) => {
      state.current.month += 1
    },
    decrementCalenderMonth: (state) => {
      state.current.month -= 1
    },
    setCalenderToDefault: (state) => {
      state.current.month = moment().month()
      state.current.year = moment().year()
      state.current.date = moment().date()
    },
    selectDate: (state) => {
      state.selected.month = state.current.month
      state.selected.year = state.current.year
      state.selected.date = state.current.date
    },
  },
})

export const { actions } = appSlice
export const {
  setCalender,
  setCalenderToDefault,
  setCalenderDate,
  setCalenderMonth,
  selectDate,
  incrementCalenderYear,
  decrementCalenderYear,
} = appSlice.actions

export default appSlice.reducer
