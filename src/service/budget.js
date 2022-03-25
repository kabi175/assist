/* eslint-disable func-names */
let budget = []
// eslint-disable-next-line wrap-iife
export default (function () {
  const add = ({ date, amount }) => budget.push({ date, amount })

  const updateByDate = ({ date, amount }) => {
    budget = budget.map((obj) => {
      if (obj.date === date) return { date, amount }
      return obj
    })
  }

  const removeByDate = ({ date }) => {
    budget = budget.filter((obj) => obj.date !== date)
  }

  return Object.freeze({
    add,
    updateByDate,
    removeByDate,
  })
})()
