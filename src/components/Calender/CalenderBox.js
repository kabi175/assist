import { Text, Pressable } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from 'slices'
import PropTypes from 'prop-types'

const CalenderBox = ({ char }) => {
  const isDate = char == null || !Number.isNaN(parseInt(char, 10))
  const color = isDate ? colors.primary : colors.black
  const { date } = useSelector((state) => state.calender)
  const dispatch = useDispatch()

  const handleClick = () => {
    if (!isDate || char == null) return
    dispatch(actions.setCalenderDate({ date: char }))
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

CalenderBox.propTypes = {
  char: PropTypes.string,
}

CalenderBox.defaultProps = {
  char: null,
}

export default CalenderBox
