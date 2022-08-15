import React, { useState } from 'react'
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
  const [selectedDate, setSelectedDate] = useState(new Date())
  return (
    <ScrollView style={[style.root]}>
      <HeaderArea />
      <CategoryList selected={selected} setSelected={setSelected} />
      <Filters selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <StatsList category={selected} selectedDate={selectedDate} />
    </ScrollView>
  )
}

export default Stats
