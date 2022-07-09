import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { colors } from 'theme'
import HeaderArea from './HeaderArea'
import StatsList from './ExpenseList'
import Filters from './Filters'
import CategoryList from './CategoryList'

const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.lightGrayPurple,
    width: '100%',
    height: '100%',
  },
})

const Stats = () => {
  const [selected, setSelected] = React.useState('Expense')
  return (
    <ScrollView style={[style.root]}>
      <HeaderArea />
      <CategoryList selected={selected} setSelected={setSelected} />
      <Filters />
      <StatsList category={selected} />
    </ScrollView>
  )
}

export default Stats
