import React, { useState } from 'react'

import {
  View, StyleSheet, StatusBar, KeyboardAvoidingView,
} from 'react-native'

import {
  HeaderArea,
  InputArea,
  Category,
  AddButton,
  Description,
} from 'components/AddExpense'

import { colors } from 'theme'
import { useExpense } from 'hooks'

const styles = StyleSheet.create({
  root: {
    flex: 0,
    backgroundColor: colors.lightGrayPurple,
    height: '100%',
    width: '100%',
  },
})

const AddExpense = () => {
  const { useAmount, useDescription, useCategory, submit } = useExpense()
  const [enable, setEnable] = useState(false)
  return (
    <KeyboardAvoidingView behavior="position" enabled={enable}>
      <View style={styles.root}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        <HeaderArea />
        <InputArea useAmount={useAmount} />
        <Category useCategory={useCategory} />
        <Description useDescription={useDescription} enable={setEnable} />

        {/* bock to expand between Category and Addbutton */}
        <View style={{ flexGrow: 1 }} />

        <AddButton submit={submit} />
      </View>
    </KeyboardAvoidingView>
  )
}

export default AddExpense
