import { View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Button } from 'react-native-elements'
import { colors } from 'theme'

const AddButton = () => {
  return (
    <View style={[tw`flex justify-end items-center pb-3`]}>
      <Button
        title="Add"
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
      />
    </View>
  )
}

export default AddButton
