import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from 'pages/Home'
import Expense from 'pages/Expense'
import Budget from 'pages/Budget'
import Calender from 'pages/Calender'
import Stats from 'pages/Stats'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const screenOptions = {
  headerShown: false,
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={screenOptions}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="AddExpense" component={Expense} />
    <Stack.Screen name="Calender" component={Calender} />
    <Stack.Screen name="AddBudget" component={Budget} />
  </Stack.Navigator>
)

export const AddExpenseNavigator = () => (
  <Stack.Navigator
    initialRouteName="AddExpense"
    headerMode="screen"
    screenOptions={screenOptions}
  >
    <Stack.Screen name="AddExpense" component={Expense} />
    <Stack.Screen name="Calender" component={Calender} />
  </Stack.Navigator>
)
export const StatsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Stats"
    headerMode="screen"
    screenOptions={screenOptions}
  >
    <Stack.Screen name="Stats" component={Stats} />
    <Stack.Screen name="EditExpense" component={Expense} />
    <Stack.Screen name="EditBudget" component={Budget} />
  </Stack.Navigator>
)
