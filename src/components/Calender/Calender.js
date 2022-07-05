import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { getDatesOfMonth } from 'service/calender'
import { nanoid } from '@reduxjs/toolkit'
import propTypes from 'prop-types'
import GestureRecognizer from 'react-native-swipe-gestures'
import { nextMonth, nextYear, previousMonth, previousYear } from 'service/date'
import CalenderRow from './CalenderRow'

export const weekNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const Calender = ({ selected, onSelect }) => {
  const [month, setMonth] = useState([])

  useEffect(() => {
    const calenderArray = getDatesOfMonth(selected || new Date())
    setMonth(calenderArray)
  }, [selected])

  return (
    <GestureRecognizer
      onSwipeUp={() => onSelect(previousYear(selected))}
      onSwipeDown={() => onSelect(nextYear(selected))}
      onSwipeLeft={() => onSelect(nextMonth(selected))}
      onSwipeRight={() => onSelect(previousMonth(selected))}
    >
      <View style={[tw`flex flex-col items-center`, { flexGrow: 1 }]}>
        <View style={[tw`flex justify-center items-center py-20`]}>
          <CalenderRow week={weekNames} />
          {month?.map((week) => (
            <CalenderRow
              key={nanoid()}
              week={week}
              selected={selected}
              onSelect={onSelect}
            />
          ))}
        </View>
      </View>
    </GestureRecognizer>
  )
}

Calender.propTypes = {
  selected: propTypes.instanceOf(Date),
  onSelect: propTypes.func.isRequired,
}
Calender.defaultProps = {
  selected: null,
}

export default Calender
