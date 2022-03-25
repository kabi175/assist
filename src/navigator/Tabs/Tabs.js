import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/Octicons'
import { colors } from 'theme'

// stack navigators
import { HomeNavigator } from '../Stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Root':
            return (
              <FontIcon
                name="note"
                color={focused ? colors.primary : colors.secondary}
                size={22}
              />
            )
          default:
            return <View />
        }
      },
      tabBarLabel: () => {
        switch (route.name) {
          case 'Root':
            return <Text style={{ color: colors.primary }}>Home</Text>

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
      },
    }}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    <Tab.Screen name="Root" component={HomeNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
