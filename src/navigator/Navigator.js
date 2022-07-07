import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'

import TabNavigator from './Tabs'

const Navigator = () => {
  const { checked } = useSelector((state) => state.app)

  return checked ? (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  ) : (
    <Text>Loading...</Text>
  )
}

export default Navigator
