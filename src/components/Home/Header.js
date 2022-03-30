/* eslint-disable react/prop-types */
import { View } from 'react-native'
import Text from 'components/Util/Text'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'
import { useNavigation } from '@react-navigation/native'
import { calender } from 'hooks'

const Header = ({ month, year }) => {
  const navigation = useNavigation()
  const monthName = calender.monthNameFromNumber(month)
  return (
    <View style={tw`flex flex-row justify-between items-center w-full`}>
      <View style={tw`flex justify-center items-start`}>
        <Text primary style={tw`font-bold text-xl`}>
          {monthName}
        </Text>
        <Text secondary>{year}</Text>
      </View>
      <View>
        <FontIcon
          name="calendar-alt"
          size={22}
          color={colors.secondary}
          onPress={() => navigation.navigate('HomeStack', { screen: 'Calender' })}
        />
      </View>
    </View>
  )
}
export default Header
