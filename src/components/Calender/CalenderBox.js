import { View, Text, Pressable } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import { useSelector, useDispatch } from 'react-redux'
import { action } from 'slices'

const CalenderBox = ({ char }) => {
  const isDate = char == null || !isNaN(parseInt(char))
  const color = isDate ? colors.primary : colors.black
  const { date } = useSelector((state) => state.calender)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (!isDate || char == null) return
    dispatch(action.setCalenderDate({ date: char }))
  }

  return (
    <Pressable
      style={[
        tw`flex justify-center items-center h-10 w-10 rounded-lg ${
          date === char && char != null && 'border-2'
        }`,
        { borderColor: colors.primary },
      ]}
      onPress={handleClick}
    >
      <Text style={[tw`font-bold text-base`, { color }]}> {char} </Text>
    </Pressable>
  )
}

export default CalenderBox
