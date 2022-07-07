import React from 'react'
import propTypes from 'prop-types'
import { Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Icon from './Icon'
import { colors } from '../theme'

const ExpenseLog = ({ category, amount }) => {
  return (
    <View style={tw`w-full flex-row items-center py-2`}>
      <View style={[tw`w-2/12`]}>
        <Icon name={category} />
      </View>
      <View
        style={[
          tw`w-10/12 flex-row py-3 px-2 rounded-lg justify-between`,
          {
            backgroundColor: colors.white,
          },
        ]}
      >
        <Text style={[tw`font-bold`]}> {category} </Text>
        <Text style={[tw`font-bold`, { color: colors.primary }]}>
          {amount} ₹
        </Text>
      </View>
    </View>
  )
}

ExpenseLog.propTypes = {
  category: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
}

export default ExpenseLog
