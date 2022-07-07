import { ScrollView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import StatsDate from 'components/StatsDate'
import useMonthStats from 'hooks/useMonthStats'
import ExpenseLog from 'components/ExpenseLog'
import { nanoid } from '@reduxjs/toolkit'

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
            <StatsDate key={date.toString()} date={date} />
            {entries.map((entry) => (
              <ExpenseLog key={nanoid()} {...entry} />
            ))}
          </>
        )
      })}
    </ScrollView>
  )
}

export default ExpenseList
