import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { colors } from 'theme'
import tw from 'tailwind-react-native-classnames'
import PropTypes from 'prop-types'

const Category = ({ selected, setSelected }) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.white,
          width: '100%',
        },
        tw`flex-row rounded-xl mt-4`,
      ]}
    >
      <Pressable
        onPress={() => setSelected('budget')}
        style={[
          selected === 'budget' && { backgroundColor: colors.primary },
          tw`w-1/2 py-2 flex-row justify-center rounded-xl`,
        ]}
      >
        <Text
          style={[
            tw`font-bold`,
            { color: colors.secondary },
            selected === 'budget' && { color: colors.white },
          ]}
        >
          Budgets Log
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setSelected('expense')}
        style={[
          selected === 'expense' && { backgroundColor: colors.primary },
          tw`w-1/2 py-2 flex-row justify-center rounded-xl`,
        ]}
      >
        <Text
          style={[
            tw`font-bold`,
            { color: colors.secondary },
            selected === 'expense' && { color: colors.white },
          ]}
        >
          Expenses Log
        </Text>
      </Pressable>
    </View>
  )
}

const HeaderArea = ({ selected, setSelected }) => {
  return (
    <View style={[tw`flex p-5`]}>
      <View style={[tw`flex-row justify-between items-center`]}>
        <Text style={[tw`font-bold text-black text-2xl`]}>Stats</Text>
      </View>
      <Category selected={selected} setSelected={setSelected} />
      <View />
    </View>
  )
}

Category.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
}

HeaderArea.propTypes = {
  selected: PropTypes.string,
  setSelected: PropTypes.func,
}

HeaderArea.defaultProps = {
  selected: 'expense',
  setSelected: () => {},
}

export default HeaderArea
