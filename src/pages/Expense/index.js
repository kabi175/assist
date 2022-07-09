import React, { useState } from 'react'

import { KeyboardAvoidingView, StatusBar, StyleSheet, View } from 'react-native'

import { colors } from 'theme'
import useEditExpense from 'hooks/useEditExpense'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import ActionButton from 'components/ActionButton'
import { removeExpense } from 'slices/expense.slice'
import { goBack } from 'service/navigation'
import HeaderArea from './HeaderArea'
import InputArea from './InputArea'
import Category from './Category'
import Description from './Description'

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
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { useAmount, useDescription, useCategory, useDate, submit } =
    useEditExpense(id)
  const [enable, setEnable] = useState(false)

  const onSave = () => {
    const isSuccess = submit()
    if (!isSuccess) {
      return
    }
    goBack(navigation)
  }

  const onDelete = () => {
    dispatch(
      removeExpense({
        _id: id,
      }),
    )
    goBack(navigation)
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled={enable}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

      <View style={styles.root}>
        <HeaderArea />
        <InputArea useAmount={useAmount} useDate={useDate} />
        <Category useCategory={useCategory} />
        <Description useDescription={useDescription} enable={setEnable} />
        {/* block to expand between CategoryList and Add button */}
        <View style={{ flexGrow: 1 }} />
        <ActionButton
          onSave={onSave}
          onDelete={onDelete}
          canDelete={id !== undefined}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default AddExpense
