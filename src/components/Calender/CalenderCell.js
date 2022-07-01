import { Pressable, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import PropTypes from 'prop-types'

const CalenderCell = ({ cellDate, onCellPress, selected }) => {
  const isDate = cellDate instanceof Date
  const color = isDate ? colors.primary : colors.black
  const isSelected =
    isDate &&
    selected instanceof Date &&
    selected.getTime() === cellDate.getTime()

  return (
    <Pressable
      style={[
        tw`flex justify-center items-center h-10 w-10 rounded-lg ${
          isSelected && 'border-2'
        }`,
        { borderColor: colors.primary },
      ]}
      onPress={() => onCellPress(cellDate)}
    >
      <Text style={[tw`font-bold text-base`, { color }]}>
        {isDate ? cellDate.getDate() : cellDate}
      </Text>
    </Pressable>
  )
}

CalenderCell.propTypes = {
  cellDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  selected: PropTypes.instanceOf(Date),
  onCellPress: PropTypes.func.isRequired,
}

CalenderCell.defaultProps = {
  cellDate: null,
  selected: null,
}

export default CalenderCell
