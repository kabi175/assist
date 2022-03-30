import { View, Text } from 'react-native'
import React from 'react'
import { Input } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import PropTypes from 'prop-types'
import { formatAmountWithSeperator } from 'service/amount'

const InputArea = ({ useAmount }) => {
  const [amount, setAmount] = useAmount()
  const validateChange = (value) => {
    const amountStr = formatAmountWithSeperator(value)
    setAmount(amountStr)
  }

  return (
    <View style={[tw`flex items-center p-5`]}>
      <Text style={tw`text-lg font-bold`}>Budget</Text>
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
    </View>
  )
}

InputArea.propTypes = {
  useAmount: PropTypes.func.isRequired,
}

export default InputArea
