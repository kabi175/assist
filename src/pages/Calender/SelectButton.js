import { View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import { useNavigation } from '@react-navigation/native'
import propTypes from 'prop-types'

const SelectButton = ({ onPress }) => {
  const navigation = useNavigation()
  const onPressHandler = () => {
    onPress()
    navigation.goBack()
  }
  return (
    <View style={[tw`flex justify-end items-center pb-3`]}>
      <Button
        title="Select"
        buttonStyle={{
          backgroundColor: colors.primary,
          borderRadius: 5,
          width: '70%',
        }}
        titleStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPressHandler}
      />
    </View>
  )
}

SelectButton.propTypes = {
  onPress: propTypes.func.isRequired,
}

export default SelectButton
