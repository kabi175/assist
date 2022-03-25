import React from 'react'
import { View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import ExpenseMeter from './ExpenseMeter'
import Header from './Header'

const ExpenseGraph = () => {
  const month = 'September'
  const year = '2022'
  const budget = 3000
  const expence = 1000
  return (
    <View style={tw`flex justify-center items-center w-full h-3/5`}>
      <Card containerStyle={tw`w-11/12 h-5/6 rounded-lg `}>
        <View style={tw`w-full h-full flex justify-between items-center`}>
          <Header month={month} year={year} />
          <ExpenseMeter budget={budget} expence={expence} />
          <View style={tw`flex justify-center items-center`}>
            <Button
              title="Add Budget"
              type="outline"
              titleStyle={{
                color: colors.primary,
              }}
              containerStyle={{
                color: colors.primary,
              }}
            />
          </View>
        </View>
      </Card>
    </View>
  )
}

export default ExpenseGraph
