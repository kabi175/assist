import { Pressable, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import React from 'react'
import PropTypes from 'prop-types'
import { colors } from 'theme'

// eslint-disable-next-line react/prop-types
const Category = ({ isSelected, setSelected, title }) => (
  <Pressable
    onPress={() => setSelected(title)}
    style={[
      isSelected && { backgroundColor: colors.primary },
      tw`py-2 flex-row justify-center rounded-xl`,
      { flexGrow: 1 },
    ]}
  >
    <Text
      style={[
        tw`font-bold`,
        { color: colors.secondary },
        isSelected && { color: colors.white },
      ]}
    >
      {title}
    </Text>
  </Pressable>
)

const CategoryList = ({ selected, setSelected }) => {
  return (
    <View style={[tw`p-5`]}>
      <View
        style={[
          tw`w-full flex-row rounded-xl drop-shadow`,
          {
            backgroundColor: colors.white,
          },
        ]}
      >
        <Category
          title="Budget"
          isSelected={selected === 'Budget'}
          setSelected={setSelected}
        />
        <Category
          title="Expense"
          isSelected={selected === 'Expense'}
          setSelected={setSelected}
        />
      </View>
    </View>
  )
}

CategoryList.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
}

export default CategoryList
