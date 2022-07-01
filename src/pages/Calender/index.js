import { LogBox, StatusBar, View } from 'react-native'
import React, { useState } from 'react'
import CalenderView from 'components/Calender'
import { colors } from 'theme'
import { useRoute } from '@react-navigation/native'
import HeaderArea from './HeaderArea'
import SelectButton from './SelectButton'

const Calender = () => {
  const { params } = useRoute()
  const { selected, setSelected } = params || {}
  const [date, setDate] = useState(selected)

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ])

  return (
    <View
      style={[
        {
          backgroundColor: colors.lightGrayPurple,
          flex: 0,
          height: '100%',
          width: '100%',
        },
      ]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.lightGrayPurple}
      />
      <HeaderArea date={date} />
      <CalenderView selected={date} onSelect={setDate} />
      {/* bock to expand between Category and Add button */}
      <SelectButton onPress={() => setSelected(date)} />
    </View>
  )
}

export default Calender
