import React from 'react'
import propTypes from 'prop-types'
import moment from 'moment'
import { Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { colors } from 'theme'

const StatsDate = ({ date }) => {
  const dayOfMonth = moment(date).format('Do')
  const dayOfWeek = moment(date).format('dddd')
  return (
    <View
      style={[
        tw`w-full flex-row border-2 rounded-lg py-2 px-2 my-2`,
        {
          borderColor: colors.primary,
          backgroundColor: colors.white,
        },
      ]}
    >
      <Text style={[tw`font-bold w-2/12`, { color: colors.primary }]}>
        {dayOfMonth}
      </Text>
      <Text style={[tw`font-bold`, { color: colors.secondary }]}>
        {dayOfWeek}
      </Text>
    </View>
  )
}

StatsDate.propTypes = {
  date: propTypes.instanceOf(Date).isRequired,
}

export default StatsDate
