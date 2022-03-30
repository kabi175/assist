/* eslint-disable newline-per-chained-call */
import joi from 'joi'

const allowedCategory = [
  'Food',
  'Transport',
  'Fashion',
  'Bills',
  'Fun',
  'Other',
]

export const dateObj = joi.object().keys({
  date: joi.number().integer().min(1).max(31).required(),
  month: joi.number().integer().min(0).max(11).required(),
  year: joi.number().integer().min(1900).max(2099).required(),
})

export const expense = joi.object().keys({
  amount: joi.number().required().min(1),
  date: dateObj,
  category: joi.string().allow(allowedCategory).required(),
  description: joi.string().optional().max(30),
})

export const budget = joi.object().keys({
  amount: joi.number().required().min(1),
  date: joi.number().required(),
  description: joi.string().optional().max(30),
})
