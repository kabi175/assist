/* eslint-disable react/prop-types */
import { View } from 'react-native'
import React from 'react'
import { colors } from 'theme'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import tw from 'tailwind-react-native-classnames'

const ProgressBar = ({ expense = 0, budget = 0 }) => (
  <View style={tw`flex w-full justify-center items-center`}>
    <View>
      <AnimatedCircularProgress
        style={tw`h-1/2`}
        size={175}
        width={40}
        fill={(expense / budget) * 100}
        tintColor={colors.primary}
        backgroundColor={colors.lightGrayPurple}
        arcSweepAngle={180}
        rotation={270}
      />
    </View>
  </View>
)

export default ProgressBar
