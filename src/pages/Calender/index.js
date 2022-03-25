import { View, StatusBar } from 'react-native'
import React from 'react'
import { HeaderArea, CalenderMonth, SelectButton } from 'components/Calender'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'

const Calender = () => {
  return (
    <View
      style={
        ([tw`flex`],
        { backgroundColor: colors.lightGrayPurple, height: '100%' })
      }
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.lightGrayPurple}
      />
      <HeaderArea />
      <CalenderMonth />
      <SelectButton />
    </View>
  )
}

export default Calender
