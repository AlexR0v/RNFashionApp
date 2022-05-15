import React, { FC }               from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Box }                     from '../../../ui'

interface BackgroundProps {

}

const Background: FC<BackgroundProps> = () => {
  return (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: 'white' }]}>
      <Box
        flex={1 / 3}
        bg='yellow'
      >
        <Image
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined
          }}
          source={require(
            '../../../assets/img/1580821161_3-p-foni-s-kruzhochkami-5.jpeg')}
        />
        <Box
          flex={1}
          bg='white'
          borderBottomRightRadius='xxxl'
        />
      </Box>
      <Box
        flex={1 / 3}
        bg='black'
        borderTopLeftRadius='xxxl'
      >
        <Image
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderBottomRightRadius: 75,
            borderTopLeftRadius: 75
          }}
          source={require(
            '../../../assets/img/1580821161_3-p-foni-s-kruzhochkami-5.jpeg')}
        />
      </Box>
      <Box
        flex={1 / 3}
        bg='white'
        borderTopLeftRadius='xxxl'
      >
        <Image
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined
          }}
          source={require(
            '../../../assets/img/1580821161_3-p-foni-s-kruzhochkami-5.jpeg')}
        />
        <Box
          flex={1}
          bg='black'
          borderTopLeftRadius='xxxl'
        />
      </Box>
    </View>
  )
}

export default Background

