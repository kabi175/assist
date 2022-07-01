import { ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import useExpenseStatsSelector from 'hooks/useExpenseStatsSelector'
import { nanoid } from '@reduxjs/toolkit'
import tw from 'tailwind-react-native-classnames'
import StatsDate from './StatsDate'
import StatsEntry from './StatsEntry'

const ExpenseList = () => {
  const { month, year } = useSelector((state) => state.calender.selected)
  const expenselist = useExpenseStatsSelector(month, year)
  return (
    <ScrollView style={[tw`p-5`]}>
      {expenselist.map(({ date, entries }) => {
        if (entries.length > 0) {
          return (
            <>
              <StatsDate key={nanoid()} date={date} />
              {entries.map((entry) => (
                <StatsEntry key={entry._id} entry={entry} />
              ))}
            </>
          )
        }
        return null
      })}
    </ScrollView>
  )
}

export default ExpenseList
