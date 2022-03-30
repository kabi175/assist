import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import PropTypes from 'prop-types'
import CategoryIcon from './CategoryIcon'

const categories = [
  { name: 'Food', icon: 'ios-fast-food-sharp' },
  { name: 'Transport', icon: 'car-sport' },
  { name: 'Fashion', icon: 'shirt' },
  { name: 'Bills', icon: 'card' },
  { name: 'Fun', icon: 'tv' },
  { name: 'Other', icon: 'options' },
]

const Category = ({ useCategory }) => {
  const [selected, setSelected] = useCategory()
  return (
    <View style={[tw`flex px-5`]}>
      <Text style={[tw`font-bold`]}>Select Category</Text>
      <View style={tw`flex flex-row flex-wrap`}>
        {categories.map((obj) => (
          <CategoryIcon
            key={obj.name}
            {...obj}
            selected={selected}
            onPress={(name) => setSelected(name)}
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
