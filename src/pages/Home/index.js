import React from 'react'
import PropTypes from 'prop-types'
import { StatusBar, StyleSheet, View } from 'react-native'
import { colors } from 'theme'
import ExpenseGraph from './ExpenseGraph'
import ExpenseList from './ExpenseList'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Home = () => {
  return (
    <View style={styles.root}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.lightGrayPurple}
      />
      <ExpenseGraph />
      <ExpenseList />
    </View>
  )
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
