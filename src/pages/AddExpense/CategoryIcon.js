import { Text, Pressable } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from 'theme'
import PropTypes from 'prop-types'

const CategoryIcon = ({ name, icon, selected, onPress }) => {
  const border = selected === name ? 'border-2' : 'border'
  const color = selected === name ? colors.primary : colors.secondary
  return (
    <Pressable
      style={[
        tw`flex justify-center items-center w-20 h-20 m-2 ${border} rounded `,
        { borderColor: color },
      ]}
      onPress={() => onPress(name)}
    >
      <Ionicons name={icon} size={26} color={color} />
      <Text style={{ color }}> {name} </Text>
    </Pressable>
  )
}

CategoryIcon.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  selected: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}

CategoryIcon.defaultProps = {
  selected: '',
}

export default CategoryIcon
