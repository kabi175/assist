import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { colors } from 'theme'
import HeaderArea from './HeaderArea'
import StatsList from './ExpenseList'
import Filters from './Filters'

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
    <ScrollView style={[style.root]}>
      <HeaderArea />
      <Filters />
      <StatsList />
    </ScrollView>
  )
}

export default Stats
