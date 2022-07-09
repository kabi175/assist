import { View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Button } from 'react-native-elements'
import { colors } from 'theme'
import propTypes from 'prop-types'

const ActionButton = ({ canDelete, onDelete, onSave }) => {
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
  onDelete: propTypes.func.isRequired,
  onSave: propTypes.func.isRequired,
  canDelete: propTypes.bool.isRequired,
}

export default ActionButton
