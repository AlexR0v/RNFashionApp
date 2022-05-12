import { useNavigation }                from '@react-navigation/native'
import React, { FC, useRef }            from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
}                                       from 'react-native-reanimated'
import {
  Dot,
  Slide,
  Subslide
}                                       from '../../components/onboarding'
import {
  SLIDE_HEIGHT
}                                       from '../../components/onboarding/Slide'
import { AuthScreenRouteProp }          from '../../types'

const BORDER_RADIUS = 75

interface OnboardingProps {

}

const { width } = Dimensions.get('window')

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description: 'Confusing about your outfit? Don`t worry! Find the best outfit here!',
    color: '#bfeaf5',
    right: false,
    picture: require('../../assets/img/pngwing.com.png')
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it first',
    description: 'Heating the clothes in your wardrobe? Explore hundreds of outfit idea',
    color: '#beecc4',
    right: true,
    picture: require('../../assets/img/PikPng.com_female-model-png_850620.png')
  },
  {
    title: 'Excentric',
    subtitle: 'Your Style, Your Way',
    description: 'Creating your individual & unique style and look amazing everyday',
    color: '#ffe4d9',
    right: false,
    picture: require('../../assets/img/PikPng.com_female-model-png_1117659.png')
  },
  {
    title: 'Funky',
    subtitle: 'Look Good, Feel Good',
    description: 'Discover the latest trends in fashion and explore your personality',
    color: '#ffdddd',
    right: true,
    picture: require('../../assets/img/pngwing.com2.png')
  }
]

const Onboarding: FC<OnboardingProps> = () => {

  const { navigate } = useNavigation<AuthScreenRouteProp>()

  const scrollRef = useRef<Animated.ScrollView>(null)
  const x = useSharedValue(0)
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (evt) => {
      x.value = evt.contentOffset.x
    }
  })

  const aStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      slides.map((_, i) => i * width),
      slides.map(slide => slide.color)
    )

    return {
      backgroundColor
    }
  })

  const aTransform = useAnimatedStyle(() => {
    const transform = [{ translateX: x.value * -1 }]
    return {
      transform
    }
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, aStyle]}>
        <Animated.ScrollView
          horizontal
          ref={scrollRef}
          snapToInterval={width}
          decelerationRate='fast'
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={onScrollHandler}
        >
          {
            slides.map(slide => (
              <Slide
                title={slide.title}
                right={slide.right}
                picture={slide.picture}
                key={slide.title}
              />
            ))
          }
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={[{ ...StyleSheet.absoluteFillObject }, aStyle]}>
          <View
            style={styles.footerContent}
          >
            <View style={styles.pagination}>
              {
                slides.map((_, index) => (
                  <Dot
                    index={index}
                    currentValue={x}
                    key={index}
                  />
                ))
              }
            </View>
            <Animated.View
              style={[
                {
                  flex: 1,
                  flexDirection: 'row',
                  width: width * slides.length
                },
                aTransform
              ]}
            >
              {
                slides.map((slide, index) => (
                  <Subslide
                    last={index === slides.length - 1}
                    key={slide.title}
                    description={slide.description}
                    subtitle={slide.subtitle}
                    onPress={() => {
                      if (scrollRef.current) {
                        scrollRef.current.scrollTo({ x: width * (index + 1), animated: true })
                      }
                      if (index === slides.length - 1) {
                        navigate('Welcome')
                      }
                    }}
                  />
                ))
              }
            </Animated.View>
          </View>
        </Animated.View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS
  },
  footer: {
    flex: 1
  },
  footerContent: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: BORDER_RADIUS
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})

export default Onboarding

