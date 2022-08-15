import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import Icon from 'components/Icon'
import { View, Text } from 'react-native'
import propTypes from 'prop-types'

const Header = ({ onClose }) => (
  <View style={[tw`w-full flex-row justify-between pt-5 px-5`]}>
    <Icon name="Close" size={25} color={colors.black} onPress={onClose} />
    <Text style={[tw`text-2xl font-bold`]}>Filter</Text>
    <Text />
  </View>
)

Header.propTypes = {
  onClose: propTypes.func.isRequired,
}

export default Header
