import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import {
  HeaderArea,
  InputArea,
  Category,
  AddButton,
} from 'components/AddExpense'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 0,
    backgroundColor: colors.lightGrayPurple,
    height: '100%',
    width: '100%',
  },
})

const AddExpense = () => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
    <HeaderArea />
    <InputArea />
    <Category />

    {/* bock to expand between Category and Addbutton */}
    <View style={{ flexGrow: 1 }} />

    <AddButton />
  </View>
)

export default AddExpense
