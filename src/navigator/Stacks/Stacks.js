import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'pages/Home'
import AddExpense from 'pages/AddExpense'
import Calender from 'pages/Calender'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
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
  </Stack.Navigator>
)
