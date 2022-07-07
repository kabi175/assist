import React from 'react'
import propTypes from 'prop-types'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from 'theme'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ionicons = {
  Food: 'ios-fast-food-sharp',
  Transport: 'car-sport',
  Fashion: 'shirt',
  Bills: 'card',
  Other: 'options',
}

const fontIcons = {
  Calender: 'calendar-alt',
  Fun: 'laugh-beam',
}

const Icon = ({ name, size, color }) => {
  if (ionicons[name]) {
    return <Ionicons name={ionicons[name]} size={size} color={color} />
  }
  if (fontIcons[name]) {
    return <FontAwesome5 name={fontIcons[name]} size={size} color={color} />
  }
  return null
}

Icon.propTypes = {
  name: propTypes.string.isRequired,
  size: propTypes.number,
  color: propTypes.string,
}

Icon.defaultProps = {
  size: 24,
  color: colors.primary,
}

export default Icon
