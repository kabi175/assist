import { View, Text } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import CategoryIcon from './CategoryIcon'

const categories = [
  { name: 'Food', icon: 'ios-fast-food-sharp' },
  { name: 'Transport', icon: 'car-sport' },
  { name: 'Fashion', icon: 'cart' },
  { name: 'Other', icon: 'options' },
]

const Category = () => {
  const [selected, setSelected] = useState('')
  return (
    <View style={[tw`flex p-5`]}>
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

export default Category
