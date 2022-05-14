import React, { FC }                                from 'react'
import { Dimensions, Image, StatusBar, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView }                  from 'react-native-keyboard-aware-scroll-view'
import { useSafeAreaInsets }                        from 'react-native-safe-area-context'
import { Box }                                      from '../../ui'

interface ContainerRightRadiusProps {
  children: React.ReactNode
  footer: React.ReactNode
  left?: boolean
  center?: boolean
}

const { width, height: wHeight } = Dimensions.get('window')

const aspect_ratio = 1080 / 1920

const height = width * aspect_ratio

const ContainerRadius: FC<ContainerRightRadiusProps> = ({ children, center, footer, left }) => {

  const insets = useSafeAreaInsets()

  return (
    <KeyboardAwareScrollView>
      <Box
        height={wHeight - (StatusBar?.currentHeight ? StatusBar?.currentHeight : 0)}
        bg='black'
      >
        <Box bg='white'>
          <Box
            borderBottomLeftRadius={left || center ? 'none' : 'xxxl'}
            borderBottomRightRadius={left ? 'xxxl' : 'none'}
            overflow='hidden'
            height={height * 0.5}
          >
            <Image
              style={{ width, height }}
              source={require(
                '../../assets/img/1580821161_3-p-foni-s-kruzhochkami-5.jpeg')}
            />
          </Box>
        </Box>
        <Box
          flex={1}
          overflow='hidden'
        >
          <Image
            style={{ ...StyleSheet.absoluteFillObject, width, height, top: -height * 0.5 }}
            source={require(
              '../../assets/img/1580821161_3-p-foni-s-kruzhochkami-5.jpeg')}
          />
          <Box
            borderRadius='xxxl'
            borderTopLeftRadius={left || center ? 'xxxl' : 'none'}
            borderTopRightRadius={left ? 'none' : 'xxxl'}
            bg='white'
            flex={1}
            justifyContent='center'
            alignItems='center'
          >
            {children}
          </Box>
        </Box>
        <Box
          paddingVertical='ml'
          bg='black'
          justifyContent='center'
          alignItems='center'
        >
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  )
}

export default ContainerRadius

