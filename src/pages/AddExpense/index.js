import React, { useState } from 'react'

import {
 KeyboardAvoidingView, StatusBar, StyleSheet, View 
} from 'react-native'

import { colors } from 'theme'
import { useAddExpense } from 'hooks'
import HeaderArea from './HeaderArea'
import InputArea from './InputArea'
import Category from './Category'
import Description from './Description'
import AddButton from './AddButton'

const styles = StyleSheet.create({
  root: {
    flex: 0,
    backgroundColor: colors.lightGrayPurple,
    height: '100%',
    width: '100%',
  },
})

const AddExpense = () => {
  const { useAmount, useDescription, useCategory, useDate, submit } =
    useAddExpense()
  const [enable, setEnable] = useState(false)
  return (
    <KeyboardAvoidingView behavior="position" enabled={enable}>
      <View style={styles.root}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        <HeaderArea />
        <InputArea useAmount={useAmount} useDate={useDate} />
        <Category useCategory={useCategory} />
        <Description useDescription={useDescription} enable={setEnable} />

        {/* bock to expand between Category and Add button */}
        <View style={{ flexGrow: 1 }} />

        <AddButton submit={submit} />
      </View>
    </KeyboardAvoidingView>
  )
}

export default AddExpense
