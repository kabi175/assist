import { Text } from 'react-native'
import React from 'react'
import { colors } from 'theme'

const Texts = ({ primary, secondary, white, children, style }) => {
  let color
  if (primary) color = colors.primary
  if (secondary) color = colors.secondary
  if (white) color = colors.white
  if (!color) color = colors.primary
  return <Text style={{ ...style, color }}>{children}</Text>
}

export default Texts
