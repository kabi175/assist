import React from 'react'
import propTypes from 'prop-types'
import moment from 'moment'
import { Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const StatsDate = ({ date }) => {
  const dayOfMonth = moment(date).format('Do')
  const dayOfWeek = moment(date).format('dddd')
  return (
    <View style={tw`w-full flex-row`}>
      <Text>{dayOfMonth}</Text>
      <Text>{dayOfWeek}</Text>
    </View>
  )
}

StatsDate.propTypes = {
  date: propTypes.instanceOf(Date).isRequired,
}

export default StatsDate
