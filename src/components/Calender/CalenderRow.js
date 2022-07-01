import { View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { nanoid } from '@reduxjs/toolkit'
import PropTypes from 'prop-types'
import CalenderCell from './CalenderCell'

const CalenderRow = ({ week, selected, onSelect }) => {
  return (
    <View style={[tw`flex flex-row`]}>
      {week?.map((char) => (
        <CalenderCell
          key={nanoid()}
          cellDate={char}
          selected={selected}
          onCellPress={onSelect}
        />
      ))}
    </View>
  )
}

CalenderRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  week: PropTypes.array.isRequired,
  selected: PropTypes.instanceOf(Date),
  onSelect: PropTypes.func,
}

CalenderRow.defaultProps = {
  selected: null,
  onSelect: () => {},
}

export default CalenderRow
