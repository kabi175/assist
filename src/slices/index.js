import { actions as calender } from './calender.slice'
import { actions as expense } from './expense.slice'
import { actions as budget } from './budget.slice'

// eslint-disable-next-line import/prefer-default-export
export const actions = {
  ...calender,
  ...expense,
  ...budget,
}
