/* eslint-disable react/prop-types */
import { View } from 'react-native'
import Text from 'components/Util/Text'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'
import { useNavigation } from '@react-navigation/native'

const Header = ({ month = 0, year = 0 }) => {
  const navigation = useNavigation()
  return (
    <View style={tw`flex flex-row justify-between items-center w-full`}>
      <View style={tw`flex justify-center items-start`}>
        <Text primary style={tw`font-bold text-xl`}>
          {month}
        </Text>
        <Text secondary>{year}</Text>
      </View>
      <View>
        <FontIcon
          name="calendar-alt"
          size={22}
          color={colors.secondary}
          onPress={() => navigation.navigate('Root', { screen: 'Calender' })}
        />
      </View>
    </View>
  )
}
export default Header
