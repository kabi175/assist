import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from 'pages/Home'
import AddExpense from 'pages/AddExpense'
import AddBudget from 'pages/AddBudget'
import Calender from 'pages/Calender'
import Stats from 'pages/Stats'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerShown: false,
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={() => ({
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="AddExpense"
      component={AddExpense}
      options={() => ({
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="Calender"
      component={Calender}
      options={() => ({
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="AddBudget"
      component={AddBudget}
      options={() => ({
        headerShown: false,
      })}
    />
  </Stack.Navigator>
)

export const AddExpenseNavigator = () => (
  <Stack.Navigator
    initialRouteName="AddExpense"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="AddExpense"
      component={AddExpense}
      options={() => ({
        title: 'AddExpense',
      })}
    />
    <Stack.Screen
      name="Calender"
      component={Calender}
      options={() => ({
        headerShown: false,
      })}
    />
  </Stack.Navigator>
)

export const AddBudgetNavigator = () => (
  <Stack.Navigator
    initialRouteName="AddBudget"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="AddBudget"
      component={AddBudget}
      options={() => ({
        headerShown: false,
      })}
    />
  </Stack.Navigator>
)

export const StatsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Stats"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Stats"
      component={Stats}
      options={() => ({
        headerShown: false,
      })}
    />
  </Stack.Navigator>
)
