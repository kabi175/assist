import { View, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import { HeaderArea, InputArea, AddButton } from 'components/AddBudget'
import useBudget from 'hooks/useBudget'
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
  const { useAmount, submit } = useBudget()
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
