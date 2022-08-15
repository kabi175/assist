import { View } from 'react-native'
import Text from 'components/Util/Text'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import { useNavigation } from '@react-navigation/native'
import { monthNameFromNumber } from 'service/calender'
import propTypes from 'prop-types'
import useClear from 'hooks/useClear'
import Icon from 'components/Icon'

const Header = ({ month, year }) => {
  const navigation = useNavigation()
  const monthName = monthNameFromNumber(month)
  const [selected, setSelected] = useState(new Date())
  const onClickCalender = () =>
    navigation?.navigate('HomeStack', {
      screen: 'Calender',
      params: {
        selected,
        setSelected,
      },
    })

  const clear = useClear()
  const onClickClear = () => {
    clear()
  }
  return (
    <View style={tw`flex flex-row justify-between items-center w-full`}>
      <View style={tw`flex justify-center items-start`}>
        <Text primary style={tw`font-bold text-xl`}>
          {monthName}
        </Text>
        <Text secondary>{year}</Text>
      </View>
      <View>
        <Icon
          name="Calendar"
          size={22}
          color={colors.secondary}
          onPress={onClickCalender}
          onLongPress={onClickClear}
        />
      </View>
    </View>
  )
}

Header.propTypes = {
  month: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
}
export default Header
