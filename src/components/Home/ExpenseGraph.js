import moment from 'moment'
import React from 'react'
import { View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import useExpenseSelector from 'hooks/useExpenseSelector'
import useBudgetSelector from 'hooks/useBudgetSelector'
import { useNavigation } from '@react-navigation/native'
import ExpenseMeter from './ExpenseMeter'
import Header from './Header'

const ExpenseGraph = () => {
  const year = moment().year()
  const month = moment().month()
  const expenses = useExpenseSelector({ year, month })
  const expence = expenses.reduce((acc, cur) => acc + cur.amount, 0)
  const budgets = useBudgetSelector({ year, month })
  const budget = budgets.reduce((acc, cur) => acc + cur.amount, 0)
  const navigation = useNavigation()
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
              onPress={() => {
                navigation.navigate('HomeStack', { screen: 'AddBudget' })
              }}
            />
          </View>
        </View>
      </Card>
    </View>
  )
}

export default ExpenseGraph
