import { View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import { useNavigation } from '@react-navigation/native'

const SelectButton = () => {
  const navigation = useNavigation()
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
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default SelectButton
