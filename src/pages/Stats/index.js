import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from 'theme'
import HeaderArea from './HeaderArea'
import StatsList from './StatsList'

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
