import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import { HeaderArea, InputArea } from 'components/AddBudget'
import useEditBudget from 'hooks/useEditBudget'
import { colors } from 'theme'
import { useNavigation, useRoute } from '@react-navigation/native'
import { goBack } from 'service/navigation'
import { useDispatch } from 'react-redux'
import ActionButton from '../../components/ActionButton'
import { removeBudget } from '../../slices/budget.slice'

const styles = StyleSheet.create({
  root: {
    flex: 0,
    justifyContent: 'space-between',
    backgroundColor: colors.lightGrayPurple,
    height: '100%',
    width: '100%',
  },
})
const AddBudget = () => {
  const { params } = useRoute()
  const { id } = params || {}
  const { useAmount, submit } = useEditBudget(id)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const onSave = () => {
    const isSuccess = submit()
    if (!isSuccess) {
      return
    }
    goBack(navigation)
  }

  const onDelete = () => {
    dispatch(
      removeBudget({
        _id: id,
      }),
    )
    goBack(navigation)
  }
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <HeaderArea />
      <InputArea useAmount={useAmount} />
      <ActionButton
        onDelete={onDelete}
        onSave={onSave}
        canDelete={id !== undefined}
      />
    </View>
  )
}

export default AddBudget
