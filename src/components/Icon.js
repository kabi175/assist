import React from 'react'
import propTypes from 'prop-types'
import { colors } from 'theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntIcon from 'react-native-vector-icons/AntDesign'

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
  PiggyBank: 'piggy-bank',
}

const antIcons = {
  Close: 'closecircle',
  Plus: 'plus',
}

const materialCommunityIcons = {
  Bank: 'bank-plus',
}

const Icon = (props) => {
  const { name } = props
  if (ionicons[name]) {
    return <Ionicons {...props} name={ionicons[name]} />
  }
  if (fontIcons[name]) {
    return <FontAwesome5 {...props} name={fontIcons[name]} />
  }

  if (antIcons[name]) {
    return <AntIcon {...props} name={antIcons[name]} />
  }

  if (materialCommunityIcons) {
    return (
      <MaterialCommunityIcons {...props} name={materialCommunityIcons[name]} />
    )
  }
  return null
}

Icon.propTypes = {
  name: propTypes.string.isRequired,
  size: propTypes.number,
  color: propTypes.string,
  onPress: propTypes.func,
}

Icon.defaultProps = {
  size: 24,
  color: colors.primary,
  onPress: undefined,
}

export default Icon
