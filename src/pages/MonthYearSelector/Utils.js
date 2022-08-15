/* eslint-disable react/prop-types */
import React from 'react'
import { Text } from 'react-native'
import moment from 'moment'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'

export const Month = ({ date, selected, onPress }) => {
  return (
    <Text
      style={[
        tw`font-bold text-xl`,
        { color: selected ? colors.primary : colors.secondary },
      ]}
      onPress={onPress}
    >
      {moment(date).format('MMM')}
    </Text>
  )
}

export const Year = ({ date, selected, onPress }) => {
  return (
    <Text
      style={[
        tw`font-bold text-xl`,
        { color: selected ? colors.primary : colors.secondary },
      ]}
      onPress={onPress}
    >
      {moment(date).format('YYYY')}
    </Text>
  )
}
