/* eslint-disable react/prop-types */
import { View } from 'react-native'
import React from 'react'
import { colors } from 'theme'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import Text from 'components/Util/Text'
import tw from 'tailwind-react-native-classnames'

const ExpenceMeter = ({ expence = 0, budget = 0 }) => (
  <>
    <View style={tw`flex w-full justify-center items-center`}>
      <View>
        <AnimatedCircularProgress
          style={tw`h-1/2`}
          size={175}
          width={40}
          fill={(expence / budget) * 100}
          tintColor={colors.primary}
          backgroundColor={colors.lightGrayPurple}
          arcSweepAngle={180}
          rotation={270}
        />
      </View>
    </View>
    <View style={tw`flex flex-row justify-center items-center`}>
      <Text primary style={tw`font-bold`}>
        {expence}{' '}
      </Text>
      <Text secondary style={tw`font-bold`}>
        {'/ '}
        {budget}
      </Text>
    </View>
  </>
)

export default ExpenceMeter
