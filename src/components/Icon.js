import React from 'react'
import propTypes from 'prop-types'
import Ionicons from 'react-native-vector-icons/Ionicons'

const categories = {
  Food: 'ios-fast-food-sharp',
  Transport: 'car-sport',
  Fashion: 'shirt',
  Bills: 'card',
  Fun: 'tv',
  Other: 'options',
}

const Icon = ({ name }) => <Ionicons name={categories[name]} />

Icon.propTypes = {
  name: propTypes.string.isRequired,
}

export default Icon
