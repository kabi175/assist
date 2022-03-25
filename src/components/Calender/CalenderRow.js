import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import CalenderBox from './CalenderBox'

const CalenderRow = ({ days }) => {
  return (
    <View style={[tw`flex flex-row`]}>
      {days.map((char, index) => (
        <CalenderBox key={index} char={char} />
      ))}
    </View>
  )
}

export default CalenderRow
