/* eslint-disable */
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Icon from 'components/Icon'
import { colors } from 'theme'
import { month2Str } from 'service/date'

const Filters = () => {
  const [filter, setFilter] = useState('month')
  const [selected, setSelected] = useState(new Date())
  const month = selected.getMonth()
  const year = selected.getFullYear()
  if (filter === 'month') {
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
        <Icon name="Calender" />
      </View>
    )
  }
  return null
}

export default Filters
