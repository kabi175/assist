import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import propTypes from 'prop-types'
import Icon from './Icon'
import { colors } from '../theme'

const BudgetLog = ({ _id, amount }) => {
  const navigation = useNavigation()
  const onPress = () => {
    navigation.navigate('StatsStack', {
      screen: 'EditBudget',
      params: {
        id: _id,
      },
    })
  }
  return (
    <TouchableOpacity
      style={tw`w-full flex-row items-center py-2`}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={[tw`w-2/12`]}>
        <Icon name="Bank" />
      </View>
      <View
        style={[
          tw`w-10/12 flex-row py-3 px-2 rounded-lg justify-between`,
          {
            backgroundColor: colors.white,
          },
        ]}
      >
        <Text style={[tw`font-bold`]}> Added </Text>
        <Text style={[tw`font-bold`, { color: colors.primary }]}>
          {amount} ₹
        </Text>
      </View>
    </TouchableOpacity>
  )
}

BudgetLog.propTypes = {
  _id: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
}
export default BudgetLog
