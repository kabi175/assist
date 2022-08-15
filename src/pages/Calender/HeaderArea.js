import { Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'
import { useNavigation } from '@react-navigation/native'
import { month2Str } from 'service/date'
import PropTypes from 'prop-types'
import Icon from 'components/Icon'

const HeaderArea = ({ date }) => {
  const navigation = useNavigation()
  const year = date.getFullYear()
  const month = date.getMonth()
  const monthName = month2Str(month)
  return (
    <View style={[tw`flex-row items-center justify-between  px-5 py-8`]}>
      <View>
        <Text style={[tw`font-bold text-3xl`, { color: colors.primary }]}>
          {monthName}
        </Text>
        <Text style={[tw`font-bold`, { color: colors.primary }]}>{year}</Text>
      </View>
      <Icon
        name="Close"
        size={22}
        color={colors.black}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

HeaderArea.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
}

export default HeaderArea
