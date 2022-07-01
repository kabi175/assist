import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { dmy2day } from 'service/date'
import moment from 'moment'

const StatsDate = ({ date: dateObj }) => {
  const day = dmy2day(dateObj)
  const date = moment()
    .month(dateObj.month)
    .year(dateObj.year)
    .date(dateObj.date)
    .format('Do')
  return (
    <View>
      <Text>
        {date} {day}
      </Text>
    </View>
  )
}

StatsDate.propTypes = {
  date: PropTypes.shape({
    date: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
}
export default StatsDate
