/* eslint-disable */
// TODO: fix this
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Icon from 'components/Icon'
import { colors } from 'theme'
import { month2Str } from 'service/date'
import MonthSelector from '../MonthYearSelector'

const Filters = ({ selectedDate, setSelectedDate }) => {
  const month = selectedDate.getMonth()
  const year = selectedDate.getFullYear()

  const [showMonthSelector, setShowMonthSelector] = React.useState(false)
  const onOpenMonthFilter = () => {
    console.log('open month filter')
    setShowMonthSelector(true)
  }

  return (
    <View style={[tw`flex-row justify-between items-center px-4`]}>
      <View>
        <Text style={[tw`font-bold text-xl`, { color: colors.primary }]}>
          {month2Str(month)}
        </Text>
        <Text style={[tw`font-semibold text-sm`, { color: colors.primary }]}>
          {year}
        </Text>
      </View>

      <MonthSelector
        selected={selectedDate}
        setSelected={setSelectedDate}
        visible={showMonthSelector}
        onClose={() => {
          setShowMonthSelector(false)
        }}
      />

      <Icon onPress={onOpenMonthFilter} name="Calender" />
    </View>
  )
}

export default Filters
