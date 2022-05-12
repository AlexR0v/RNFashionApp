import React, { FC }  from 'react'
import { Dimensions } from 'react-native'
import { Box, Text }  from '../../ui'

interface SlideProps {
  title: string
  right?: boolean
}

const { width, height } = Dimensions.get('window')

export const SLIDE_HEIGHT = 0.61 * height

const Slide: FC<SlideProps> = ({ title, right }) => {

  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' }
  ]

  return (
    <Box width={width}>
      <Box
        height={100}
        justifyContent='center'
        style={{ transform }}
      >
        <Text variant='hero'>{title}</Text>
      </Box>
    </Box>
  )
}

export default Slide

