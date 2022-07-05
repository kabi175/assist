import { Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

const StatsEntry = ({ entry }) => {
  const { amount, category } = entry
  return (
    <View>
      <Text>
        {amount} - {category}
      </Text>
    </View>
  )
}

StatsEntry.propTypes = {
  entry: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
}

export default StatsEntry
