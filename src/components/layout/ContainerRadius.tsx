import React, { FC, useEffect, useState }                     from 'react'
import { Dimensions, Image, Keyboard, StatusBar, StyleSheet } from 'react-native'
import { useSafeAreaInsets }                                  from 'react-native-safe-area-context'
import { Box }                                                from '../../ui'

interface ContainerRightRadiusProps {
  children: React.ReactNode
  footer: React.ReactNode
  left?: boolean
}

const { width } = Dimensions.get('window')

const aspect_ratio = 1080 / 1920

const height = width * aspect_ratio

const ContainerRadius: FC<ContainerRightRadiusProps> = ({ children, footer, left }) => {

  const insets = useSafeAreaInsets()

  const [isKeyboardVisible, setKeyboardVisible] = useState(false)
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true)
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false)
      }
    )
    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  return (
    <Box
      flex={1}
      bg='black'
    >
      <StatusBar barStyle='light-content' />
      <Box bg='white'>
        <Box
          borderBottomLeftRadius={left ? 'none' : 'xxxl'}
          borderBottomRightRadius={left ? 'xxxl' : 'none'}
          overflow='hidden'
          height={height * 0.61}
        >
          <Image
            style={{ width, height }}
            source={require(
              '../../assets/img/vecteezy_abstract-colorful-geometric-background-3d-effect-trendy-colors_.jpg')}
          />
        </Box>
      </Box>
      <Box
        flex={1}
        overflow='hidden'
      >
        <Image
          style={{ ...StyleSheet.absoluteFillObject, width, height, top: -height * 0.61 }}
          source={require(
            '../../assets/img/vecteezy_abstract-colorful-geometric-background-3d-effect-trendy-colors_.jpg')}
        />
        <Box
          borderRadius='xxxl'
          borderTopLeftRadius={left ? 'xxxl' : 'none'}
          borderTopRightRadius={left ? 'none' : 'xxxl'}
          bg='white'
          flex={1}
        >
          {children}
        </Box>
      </Box>
      {
        isKeyboardVisible ? null :
          <Box
            paddingVertical='ml'
            bg='black'
            justifyContent='center'
            alignItems='center'
          >
            {footer}
            <Box height={insets.bottom} />
          </Box>
      }
    </Box>
  )
}

export default ContainerRadius

