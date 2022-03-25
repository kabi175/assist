/* eslint-disable wrap-iife */
/* eslint-disable func-names */
let expenceList = []

export default (function () {
  const add = ({ date, amount, category }) => {
    expenceList.push({ date, amount, category })
  }

  const removeById = ({ id }) => {
    expenceList = expenceList.filter((obj) => obj.id !== id)
  }

  const getByDate = ({ date }) => expenceList.filter((obj) => obj.date === date)

  const getById = ({ id }) => expenceList.filter((obj) => obj.id === id)

  return Object.freeze({
    add,
    removeById,
    getByDate,
    getById,
  })
})()
