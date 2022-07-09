import { Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const HeaderArea = () => {
  return (
    <View style={[tw`flex-row px-5 pt-5  justify-between items-center`]}>
      <Text style={[tw`font-bold text-black text-2xl`]}>Stats</Text>
    </View>
  )
}

export default HeaderArea
