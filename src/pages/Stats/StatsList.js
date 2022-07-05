import { ScrollView } from 'react-native'
import React from 'react'
import { nanoid } from '@reduxjs/toolkit'
import tw from 'tailwind-react-native-classnames'
import StatsDate from 'components/StatsDate'
import useMonthStats from 'hooks/useMonthStats'
import ExpenseLog from 'components/ExpenseLog'

const ExpenseList = () => {
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  const expenseList = useMonthStats(month, year)
  return (
    <ScrollView style={[tw`p-5`]}>
      {expenseList.map(({ date, entries }) => {
        if (entries.length <= 0) return null
        return (
          <>
            <StatsDate key={nanoid()} date={date} />
            {entries.map((entry) => (
              <ExpenseLog key={entry._id} {...entry} />
            ))}
          </>
        )
      })}
    </ScrollView>
  )
}

export default ExpenseList
