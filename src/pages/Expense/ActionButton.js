import { View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Button } from 'react-native-elements'
import { colors } from 'theme'
import { useNavigation } from '@react-navigation/native'
import propTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { removeExpense } from '../../slices/expense.slice'

const ActionButton = ({ submit, id }) => {
  const canDelete = id !== null
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    } else {
      navigation.navigate('HomeStack', { screen: 'Home' })
    }
  }

  const onSave = () => {
    const isSuccess = submit()
    if (!isSuccess) {
      return
    }
    goBack()
  }

  const onDelete = () => {
    dispatch(
      removeExpense({
        _id: id,
      }),
    )
    goBack()
  }
  return (
    <View style={tw`flex items-center justify-center`}>
      <View
        style={[tw`flex-row justify-between items-center pb-3 w-3/4 h-14 `]}
      >
        <Button
          title="Save"
          buttonStyle={{
            backgroundColor: colors.primary,
            borderRadius: 5,
          }}
          containerStyle={{
            flex: 1,
            paddingHorizontal: 3,
          }}
          titleStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onSave}
        />
        {canDelete && (
          <Button
            title="Delete"
            buttonStyle={{
              backgroundColor: colors.pink,
            }}
            containerStyle={{
              flex: 1,
              paddingHorizontal: 3,
            }}
            titleStyle={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={onDelete}
          />
        )}
      </View>
    </View>
  )
}

ActionButton.propTypes = {
  submit: propTypes.func.isRequired,
  id: propTypes.string,
}

ActionButton.defaultProps = {
  id: null,
}
export default ActionButton
