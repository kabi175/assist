/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  checked: false,
  loggedIn: false,
}

// ------------------------------------
// Slice
// ------------------------------------

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    authenticate: (state, { payload }) => {
      state.loggedIn = payload.loggedIn
      state.checked = payload.checked
    },
  },
})

export const { action } = appSlice
export const { authenticate, saveMe } = appSlice.actions

export default appSlice.reducer
