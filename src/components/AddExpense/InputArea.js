import { View, Text } from 'react-native'
import React from 'react'
import { Input } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import PropTypes from 'prop-types'
import { formatAmountWithSeperator } from 'service/amount'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { month2Str, dmy2day } from 'service/date'

const InputArea = ({ useAmount }) => {
  const navigation = useNavigation()
  const [amount, setAmount] = useAmount()
  const { date, month, year } = useSelector((state) => state.calender)
  const monthStr = month2Str(month)
  const day = dmy2day({ date, month, year })
  const dateStr = `${day}, ${date} ${monthStr} ${year}`
  const validateChange = (value) => {
    const amountStr = formatAmountWithSeperator(value)
    setAmount(amountStr)
  }

  return (
    <View style={[tw`flex p-5`]}>
      <Text style={tw`font-bold`}>Amount</Text>
      <Input
        placeholder="Enter"
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
          {dateStr}
        </Text>
        <FontIcon
          name="calendar-alt"
          size={22}
          color={colors.secondary}
          onPress={() => {
            navigation.navigate('HomeStack', { screen: 'Calender' })
          }}
        />
      </View>
    </View>
  )
}

InputArea.propTypes = {
  useAmount: PropTypes.func.isRequired,
}

export default InputArea
