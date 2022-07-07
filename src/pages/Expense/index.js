import React, { useState } from 'react'

import { KeyboardAvoidingView, StatusBar, StyleSheet, View } from 'react-native'

import { colors } from 'theme'
import useEditExpense from 'hooks/useEditExpense'
import { useRoute } from '@react-navigation/native'
import HeaderArea from './HeaderArea'
import InputArea from './InputArea'
import Category from './Category'
import Description from './Description'
import ActionButton from './ActionButton'

const styles = StyleSheet.create({
  root: {
    flex: 0,
    backgroundColor: colors.lightGrayPurple,
    height: '100%',
    width: '100%',
  },
})

const AddExpense = () => {
  const { params } = useRoute()
  const { id } = params || {}

  const { useAmount, useDescription, useCategory, useDate, submit } =
    useEditExpense(id)
  const [enable, setEnable] = useState(false)
  return (
    <KeyboardAvoidingView behavior="position" enabled={enable}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      <View style={styles.root}>
        <HeaderArea />
        <InputArea useAmount={useAmount} useDate={useDate} />
        <Category useCategory={useCategory} />
        <Description useDescription={useDescription} enable={setEnable} />
        {/* block to expand between Category and Add button */}
        <View style={{ flexGrow: 1 }} />
        <ActionButton submit={submit} id={id} />
      </View>
    </KeyboardAvoidingView>
  )
}

export default AddExpense
