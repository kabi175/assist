import { ScrollView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import StatsDate from 'components/StatsDate'
import useMonthStats from 'hooks/useMonthStats'
import ExpenseLog from 'components/ExpenseLog'
import useExpense from 'hooks/useExpense'
import useBudget from 'hooks/useBudget'
import propTypes from 'prop-types'
import BudgetLog from '../../components/BudgetLog'

const ExpenseList = ({ category }) => {
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  let entryList = []

  switch (category) {
    case 'Expense':
      entryList = useMonthStats(useExpense(), month, year)
      break
    case 'Budget':
      entryList = useMonthStats(useBudget(), month, year)
      break
    default:
      throw new Error(`[error] Unknown category: ${category}`)
  }

  return (
    <ScrollView style={[tw`p-5`]}>
      {entryList.map(({ date, entries }) => {
        if (entries.length <= 0) return null
        return (
          <React.Fragment key={date.toString()}>
            <StatsDate date={date} />
            {entries.map((entry) =>
              category === 'Expense' ? (
                <ExpenseLog key={entry._id} {...entry} />
              ) : (
                <BudgetLog key={entry._id} {...entry} />
              ),
            )}
          </React.Fragment>
        )
      })}
    </ScrollView>
  )
}

ExpenseList.propTyeps = {
  category: propTypes.string.isRequired,
}

export default ExpenseList
