import { View, StatusBar } from 'react-native'
import React from 'react'
import { HeaderArea, CalenderMonth, SelectButton } from 'components/Calender'
import { colors } from 'theme'

const Calender = () => {
  console.log('jdncj')
  return (
    <View
      style={[
        {
          backgroundColor: colors.lightGrayPurple,
          flex: 0,
          height: '100%',
          width: '100%',
        },
      ]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.lightGrayPurple}
      />
      <HeaderArea />
      <CalenderMonth />
      {/* bock to expand between Category and Addbutton */}
      <SelectButton />
    </View>
  )
}

export default Calender
