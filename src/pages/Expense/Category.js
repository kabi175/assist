import { Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import PropTypes from 'prop-types'
import CategoryIcon from './CategoryIcon'

const categories = ['Food', 'Transport', 'Fashion', 'Bills', 'Fun', 'Other']

const Category = ({ useCategory }) => {
  const [selected, setSelected] = useCategory()
  return (
    <View style={[tw`flex px-5`]}>
      <Text style={[tw`font-bold`]}>Select Category</Text>
      <View style={tw`flex  justify-center flex-row flex-wrap`}>
        {categories.map((name) => (
          <CategoryIcon
            key={name}
            name={name}
            selected={selected}
            onPress={() => setSelected(name)}
          />
        ))}
      </View>
    </View>
  )
}

Category.propTypes = {
  useCategory: PropTypes.func.isRequired,
}

export default Category
