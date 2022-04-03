import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import FontIcon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { month2Str } from 'service/date'

const HeaderArea = () => {
  const navigation = useNavigation()
  const { year, month } = useSelector((state) => state.calender.current)
  const monthName = month2Str(month)
  return (
    <View style={[tw`flex-row items-center justify-between  px-5 py-8`]}>
      <View>
        <Text style={[tw`font-bold text-3xl`, { color: colors.primary }]}>
          {monthName}
        </Text>
        <Text style={[tw`font-bold`, { color: colors.primary }]}>{year}</Text>
      </View>
      <FontIcon
        name="closecircle"
        size={22}
        color={colors.black}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default HeaderArea
