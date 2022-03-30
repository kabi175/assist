import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/MaterialIcons'
import { colors } from 'theme'

// stack navigators
import { HomeNavigator, AddExpenseNavigator } from '../Stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'HomeStack':
            return (
              <FontIcon
                name="note"
                color={focused ? colors.primary : colors.secondary}
                size={22}
              />
            )
          case 'AddExpenseStack':
            return (
              <Ionicons
                name="add"
                color={focused ? colors.primary : colors.secondary}
                size={26}
              />
            )
          default:
            return <View />
        }
      },
      tabBarLabel: ({ focused }) => {
        switch (route.name) {
          case 'HomeStack':
            return (
              <Text
                style={{ color: focused ? colors.primary : colors.secondary }}
              >
                Home
              </Text>
            )

          case 'AddExpenseStack':
            return (
              <Text
                style={{ color: focused ? colors.primary : colors.secondary }}
              >
                Expense
              </Text>
            )

          default:
            return <Text style={{ color: colors.primary }}>{route.name}</Text>
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.lightPurple,
      inactiveTintColor: colors.gray,
      style: {
        // backgroundColor: 'white',
        // borderTopColor: 'gray',
        // borderTopWidth: 1,
        // paddingBottom: 5,
        // paddingTop: 5,
        color: colors.primary,
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
    }}
    initialRouteName="Home"
  >
    <Tab.Screen name="HomeStack" component={HomeNavigator} />
    <Tab.Screen name="AddExpenseStack" component={AddExpenseNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
