import { View, Text } from 'react-native'
import React from 'react'
import { colors } from 'theme'
import tw from 'tailwind-react-native-classnames'
import FontIcon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import moment from 'moment'
import { month2Str } from 'service/date'

const HeaderArea = () => {
  const navigation = useNavigation()
  const month = moment().month()
  const year = moment().year()
  const monthName = month2Str(month)
  return (
    <View style={[tw`flex flex-row h-1/6 items-center justify-between p-5`]}>
      <View>
        <Text style={[tw`font-bold text-2xl`, { color: colors.primary }]}>
          {monthName}
        </Text>
        <Text style={[tw`font-semibold text-lg`, { color: colors.primary }]}>
          {year}
        </Text>
      </View>
      <FontIcon
        name="closecircle"
        color={colors.black}
        size={22}
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack()
          } else {
            navigation.navigate('HomeStack', { screen: 'Home' })
          }
        }}
      />
    </View>
  )
}

export default HeaderArea
