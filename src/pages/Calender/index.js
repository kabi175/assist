import { View, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { HeaderArea, CalenderMonth, SelectButton } from 'components/Calender'
import { colors } from 'theme'
import { useDispatch } from 'react-redux'
import { actions } from 'slices'
import GestureRecognizer from 'react-native-swipe-gestures'

const Calender = () => {
  const dispath = useDispatch()
  useEffect(() => {
    dispath(actions.setCalenderToDefault())
  })
  return (
    <GestureRecognizer
      onSwipeUp={() => dispath(actions.incrementCalenderYear())}
      onSwipeDown={() => dispath(actions.decrementCalenderYear())}
      onSwipeLeft={() => dispath(actions.incrementCalenderMonth())}
      onSwipeRight={() => dispath(actions.decrementCalenderMonth())}
    >
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
    </GestureRecognizer>
  )
}

export default Calender
