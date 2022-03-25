import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import FontIcon from 'react-native-vector-icons/AntDesign'
import { colors } from 'theme'
import Text from 'components/Util/Text'
import { useNavigation } from '@react-navigation/native'

const EmptyExpenseList = () => {
  const navigation = useNavigation()
  return (
    <View style={tw`w-full h-2/5 flex justify-center items-center`}>
      <TouchableOpacity
        style={{
          backgroundColor: colors.primary,
          padding: 15,
          borderRadius: 50,
        }}
        onPress={() => {
          navigation.navigate('Root', { screen: 'AddExpense' })
        }}
      >
        <FontIcon name="plus" size={25} color={colors.white} />
      </TouchableOpacity>
      <Text primary style={tw`font-bold p-3`}>
        Add Expense
      </Text>
    </View>
  )
}

const ExpenseList = () => {
  const list = []
  if (list || list.length === 0) return <EmptyExpenseList />

  return (
    <View style={tw`w-full h-2/5`}>
      <Text style={tw`font-semibold`}>ExpenseList</Text>
    </View>
  )
}

export default ExpenseList
