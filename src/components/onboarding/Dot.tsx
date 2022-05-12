import React, { FC }                                                           from 'react'
import { Dimensions }                                                          from 'react-native'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'

interface DotProps {
  index: number
  currentValue: SharedValue<number>
}

const { width } = Dimensions.get('window')

const Dot: FC<DotProps> = ({ index, currentValue }) => {

  const rOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(
      currentValue.value / width,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    )

    return {
      opacity
    }
  })

  const rScale = useAnimatedStyle(() => {
    const scale = interpolate(
      currentValue.value / width,
      [index - 1, index, index + 1],
      [1, 1.25, 1],
      Extrapolation.CLAMP
    )

    return {
      transform: [{ scale }]
    }
  })

  return (
    <Animated.View
      style={
        [
          {
            backgroundColor: '#2cb9b0',
            width: 8,
            height: 8,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            borderTopRightRadius: 8,
            margin: 4
          }, rOpacity, rScale
        ]}
    />
  )
}

export default Dot

