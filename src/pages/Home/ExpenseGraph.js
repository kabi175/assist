import moment from 'moment'
import React from 'react'
import { View } from 'react-native'
import { Button, Card } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import { useNavigation } from '@react-navigation/native'
import Text from 'components/Util/Text'
import useBudgetSum from 'hooks/useBudgetSum'
import useExpenseSum from 'hooks/useExpenseSum'
import Header from './Header'
import ProgressBar from './ProgressBar'

const ExpenseGraph = () => {
  const year = moment().year()
  const month = moment().month()
  const expenseSum = useExpenseSum(month, year)
  const budgetSum = useBudgetSum(month, year)
  console.log(expenseSum, budgetSum)
  const navigation = useNavigation()
  return (
    <View style={tw`flex justify-center items-center w-full h-3/5`}>
      <Card containerStyle={tw`w-11/12 h-5/6 rounded-lg `}>
        <View style={tw`w-full h-full flex justify-between items-center`}>
          <Header month={month} year={year} />
          <ProgressBar budget={budgetSum} expense={expenseSum} />
          <View style={tw`flex flex-row justify-center items-center`}>
            <Text primary style={tw`font-bold`}>
              ₹ {expenseSum}
            </Text>
            <Text secondary style={tw`font-bold`}>
              {' / '}₹ {budgetSum}
            </Text>
          </View>
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
