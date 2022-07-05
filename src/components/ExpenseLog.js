import React from 'react'
import propTypes from 'prop-types'
import { Text, View } from 'react-native'
import Icon from './Icon'

const ExpenseLog = ({ category, amount }) => {
  return (
    <View>
      <Icon name={category} />
      <View>
        <Text> {category} </Text>
        <Text>{amount}</Text>
      </View>
    </View>
  )
}

ExpenseLog.propTypes = {
  category: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
}

export default ExpenseLog
