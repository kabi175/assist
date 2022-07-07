import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { colors } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
import PropTypes from 'prop-types'

const Description = ({ useDescription, enable }) => {
  const [description, setDescription] = useDescription()
  return (
    <View style={[tw`flex p-5`]}>
      <Text style={tw`font-bold py-3`}>Description</Text>
      <TextInput
        placeholder="more..."
        maxLength={30}
        onFocus={() => enable(true)}
        onBlur={() => enable(false)}
        style={[
          tw`rounded-lg p-2 px-4`,
          { backgroundColor: colors.white, borderWidth: 0 },
        ]}
        value={description}
        onChangeText={(txt) => setDescription(txt)}
      />
    </View>
  )
}

Description.propTypes = {
  useDescription: PropTypes.func.isRequired,
  enable: PropTypes.func.isRequired,
}
export default Description
