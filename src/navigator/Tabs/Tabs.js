import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from 'theme'

// stack navigators
import { HomeNavigator, AddExpenseNavigator, StatsNavigator } from '../Stacks'

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
          case 'StatsStack':
            return (
              <AntDesign
                name="linechart"
                color={focused ? colors.primary : colors.secondary}
                size={22}
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
          case 'StatsStack':
            return (
              <Text
                style={{ color: focused ? colors.primary : colors.secondary }}
              >
                Stats
              </Text>
            )

          default:
            return (
              <Text
                style={{ color: focused ? colors.primary : colors.secondary }}
              >
                {route.name}
              </Text>
            )
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
    <Tab.Screen name="StatsStack" component={StatsNavigator} />
    <Tab.Screen name="AddExpenseStack" component={AddExpenseNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
