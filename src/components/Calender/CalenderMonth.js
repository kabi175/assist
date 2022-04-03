import { View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'
import { calender } from 'hooks'
import { month2Str } from 'service/date'
import CalenderRow from './CalenderRow'

const weekNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const CalenderMonth = () => {
  const { year, month } = useSelector((state) => state.calender.current)
  const monthName = month2Str(month)
  const calenderArray = calender.useCalender(monthName, year)
  return (
    <View style={([tw`flex flex-col items-center`], { flexGrow: 1 })}>
      <View style={[tw`flex justify-center items-center py-20`]}>
        <CalenderRow days={weekNames} />
        {calenderArray.map((week, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <CalenderRow key={index} days={week} />
        ))}
      </View>
    </View>
  )
}

export default CalenderMonth
