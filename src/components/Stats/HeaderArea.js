import { View, Text, Pressable } from 'react-native'
import React from 'react'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'
import { useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { month2Str } from 'service/date'
import { Button } from 'react-native-elements'

const Category = ({ selected, setSelected }) => {
  return (
    <View
      style={[
        { backgroundColor: colors.white, width: '100%' },
        tw`flex-row rounded-xl my-8`,
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
  const navigation = useNavigation()
  const { month, year } = useSelector((state) => state.calender.selected)
  return (
    <View style={[tw`flex p-5`]}>
      <View style={[tw`flex-row justify-between items-center`]}>
        <Text style={[tw`font-bold text-black text-2xl`]}>Stats</Text>
        <FontIcon
          name="calendar-alt"
          size={22}
          color={colors.secondary}
          onPress={() => {
            navigation.navigate('HomeStack', { screen: 'Calender' })
          }}
        />
      </View>
      <Category selected={selected} setSelected={setSelected} />
      <View style={[tw`flex-row justify-between items-start`]}>
        <View>
          <Text style={[tw`font-bold text-xl`, { color: colors.primary }]}>
            {month2Str(month)}
          </Text>
          <Text style={[tw`font-semibold text-sm`, { color: colors.primary }]}>
            {year}
          </Text>
        </View>
        <Button
          title="Filters"
          type="outline"
          titleStyle={[{ color: colors.black }, tw`text-sm`]}
          buttonStyle={[
            {
              backgroundColor: colors.white,
              borderColor: colors.white,
            },
            tw`py-0.5 px-2 rounded-lg`,
          ]}
        />
      </View>
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
