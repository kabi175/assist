import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  month: moment().month(),
  year: moment().year(),
  date: moment().date(),
}

// ------------------------------------
// Slice
// ------------------------------------

const appSlice = createSlice({
  name: 'calender',
  initialState,
  reducers: {
    setCalender: (state, { payload }) => {
      state.month = payload.month
      state.year = payload.year
      state.date = payload.date
    },
    setCalenderDate: (state, { payload }) => {
      state.date = payload.date
    },
    setCalenderMonth: (state, { payload }) => {
      state.month = payload.month
    },
    setCalenderToDefault: (state) => {
      state.month = moment().month()
      state.year = moment().year()
      state.date = moment().date()
    },
  },
})

export const { action } = appSlice
export const {
  setCalender,
  setCalenderToDefault,
  setCalenderDate,
  setCalenderMonth,
} = appSlice.actions

export default appSlice.reducer
