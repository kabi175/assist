import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'
import CalenderRow from './CalenderRow'
import { calender } from 'hooks'

const weekNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const CalenderMonth = () => {
  const { year, month } = useSelector((state) => state.calender)
  const monthName = calender.monthNameFromNumber(month)
  const calenderArray = calender.useCalender(monthName, year)
  return (
    <View style={[tw`flex justify-center items-center p-5`]}>
      <CalenderRow days={weekNames} />
      {calenderArray.map((week, index) => (
        <CalenderRow key={index} days={week} />
      ))}
    </View>
  )
}

export default CalenderMonth
