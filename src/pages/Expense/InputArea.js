import { Text, View } from 'react-native'
import React from 'react'
import { Input } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import PropTypes from 'prop-types'
import { formatAmountWithSeperator } from 'service/amount'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'

const formatDate = (dateObj) => {
  const d = moment(dateObj)
  const day = d.format('dddd')
  const date = d.format('DD')
  const monthStr = d.format('MMM')
  const year = d.format('YYYY')
  return `${day}, ${date} ${monthStr} ${year}`
}

const InputArea = ({ useAmount, useDate }) => {
  const navigation = useNavigation()
  const [selected, setSelected] = useDate()
  const [amount, setAmount] = useAmount()
  const validateChange = (value) => {
    const amountStr = formatAmountWithSeperator(value)
    setAmount(amountStr)
  }
  const onCalenderPress = () => {
    navigation.navigate('AddExpenseStack', {
      screen: 'Calender',
      params: {
        selected,
        setSelected,
      },
    })
  }

  return (
    <View style={[tw`flex p-5`]}>
      <Text style={tw`font-bold`}>Amount</Text>
      <Input
        placeholder="Enter"
        keyboardType="numeric"
        rightIcon={{
          type: 'font-awesome',
          name: 'rupee',
          color: colors.primary,
        }}
        value={amount}
        onChangeText={validateChange}
        containerStyle={{ color: colors.primary }}
        inputContainerStyle={{
          borderBottomColor: colors.primary,
        }}
        inputStyle={{
          color: colors.primary,
        }}
      />
      <View style={tw`flex-row justify-between`}>
        <Text style={[tw`font-bold`, { color: colors.primary }]}>
          {formatDate(selected)}
        </Text>
        <FontIcon
          name="calendar-alt"
          size={22}
          color={colors.secondary}
          onPress={onCalenderPress}
        />
      </View>
    </View>
  )
}

InputArea.propTypes = {
  useAmount: PropTypes.func.isRequired,
  useDate: PropTypes.func.isRequired,
}

export default InputArea
