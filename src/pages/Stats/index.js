import React from 'react'
import { View, StyleSheet } from 'react-native'
import { HeaderArea, StatsList } from 'components/Stats'
import { colors } from 'theme'

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.lightGrayPurple,
    width: '100%',
    height: '100%',
  },
})

const Stats = () => {
  return (
    <View style={[style.root]}>
      <HeaderArea />
      <StatsList />
    </View>
  )
}

export default Stats
