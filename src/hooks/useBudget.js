function useBudget() {
  const addBudget = (amount, date) => {
    console.log(amount, date)
  }

  return Object.freeze({
    addBudget,
  })
}

export default useBudget
