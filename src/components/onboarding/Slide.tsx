import React, { FC }                                 from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

interface SlideProps {
  title: string
  right?: boolean
  picture: number
}

const { width, height } = Dimensions.get('window')

export const SLIDE_HEIGHT = 0.61 * height

const Slide: FC<SlideProps> = ({ title, right, picture }) => {

  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' }
  ]

  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image
          source={picture}
          style={styles.picture}
          resizeMode='contain'
        />
      </View>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center'
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    color: '#ffffff',
    fontFamily: 'SFProText-Bold',
    textAlign: 'center'
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined
  },
  underlay: {
    ...StyleSheet.absoluteFillObject
  }
})

export default Slide

