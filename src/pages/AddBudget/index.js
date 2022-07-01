import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import { AddButton, HeaderArea, InputArea } from 'components/AddBudget'
import useAddBudget from 'hooks/useAddBudget'
import { colors } from 'theme'

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
  const { useAmount, submit } = useAddBudget()
  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <HeaderArea />
      <InputArea useAmount={useAmount} />
      <AddButton submit={submit} />
    </View>
  )
}

export default AddBudget
