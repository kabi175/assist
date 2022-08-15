/* eslint-disable react/prop-types */
import React from 'react'
import { View } from 'react-native'
import moment from 'moment'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import { Month, Year } from './Utils'

const ListWraper = ({ children }) => (
  <View
    style={[
      tw`w-24 h-36 rounded-lg justify-evenly items-center`,
      { backgroundColor: colors.white },
    ]}
  >
    {children}
  </View>
)

export const MonthList = ({ selected, setSelected }) => {
  const p = moment(selected).subtract(1, 'month').toDate()
  const a = moment(selected).add(1, 'month').toDate()
  return (
    <ListWraper>
      <Month date={p} onPress={() => setSelected(p)} />
      <Month date={selected} onPress={() => setSelected(selected)} selected />
      <Month date={a} onPress={() => setSelected(a)} />
    </ListWraper>
  )
}

export const YearList = ({ selected, setSelected }) => {
  const p = moment(selected).subtract(1, 'year').toDate()
  const a = moment(selected).add(1, 'year').toDate()
  return (
    <ListWraper>
      <Year date={p} onPress={() => setSelected(p)} />
      <Year date={selected} onPress={() => setSelected(selected)} selected />
      <Year date={a} onPress={() => setSelected(a)} />
    </ListWraper>
  )
}
