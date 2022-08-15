import { View, Text } from 'react-native'
import React from 'react'
import { colors } from 'theme'
import tw from 'tailwind-react-native-classnames'
import Icon from 'components/Icon'
import { useNavigation } from '@react-navigation/native'

const HeaderArea = () => {
  const navigation = useNavigation()
  return (
    <View
      style={[
        tw`flex flex-row h-1/6 items-center justify-between p-5`,
        { backgroundColor: colors.primary },
      ]}
    >
      <Text style={[tw`font-bold text-xl`, { color: colors.white }]}>
        Add Expense
      </Text>
      <Icon
        name="Close"
        color={colors.white}
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
