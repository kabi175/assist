import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Input } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

const InputArea = () => {
  const [amount, setAmount] = useState('')
  const dateStr = 'Tuesday, 20 September'
  const validateAndSetAmount = (amountStr) => {
    const base10 = 10
    const amounts = parseInt(amountStr, base10)
    if (amountStr !== '' && Number.isNaN(amounts)) return
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
        onChangeText={validateAndSetAmount}
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
        <FontIcon name="calendar-alt" size={22} color={colors.secondary} />
      </View>
    </View>
  )
}

export default InputArea
