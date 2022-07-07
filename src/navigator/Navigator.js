import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import TabNavigator from './Tabs'

const Navigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
)

export default Navigator
