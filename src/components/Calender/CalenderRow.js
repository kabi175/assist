/* eslint-disable react/prop-types */
import { View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { nanoid } from '@reduxjs/toolkit'
import CalenderBox from './CalenderBox'

const CalenderRow = ({ days }) => {
  return (
    <View style={[tw`flex flex-row`]}>
      {days.map((char) => (
        <CalenderBox key={nanoid()} char={char} />
      ))}
    </View>
  )
}

export default CalenderRow
