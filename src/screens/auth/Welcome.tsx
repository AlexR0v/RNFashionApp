import React, { FC }                     from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import { useNavigation }                 from '../../hooks'
import { Box, Button, Text }             from '../../ui'

interface WelcomeProps {

}

const { height } = Dimensions.get('window')

const Welcome: FC<WelcomeProps> = () => {

  const { navigate } = useNavigation()

  return (
    <Box
      flex={1}
      bg='white'
    >
      <Box
        bg='lightGray'
        borderBottomRightRadius='xxxl'
        alignItems='center'
        justifyContent='center'
      >
        <Image
          source={require('../../assets/img/Model-Man-PNG-Picture.png')}
          style={styles.picture}
          resizeMode='contain'
        />
      </Box>
      <Box
        flex={1}
        borderTopLeftRadius='xxxl'
      >
        <Box
          bg='lightGray'
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          bg='white'
          borderTopLeftRadius='xxxl'
          flex={1}
          alignItems='center'
          justifyContent='space-evenly'
          padding='xl'
        >
          <Text variant='title2'>Let`s get started</Text>
          <Text
            variant='body'
            textAlign='center'
          >Login to your account below or signup for an amazing experience</Text>
          <Button
            variant='primary'
            label='Have an account? Login.'
            onPress={() => navigate('Login')}
          />
          <Button
            variant='default'
            label='Join us, it`s Free'
            onPress={() => navigate('Register')}
          />
          <Button
            variant='transparent'
            label='Forgot password?'
            onPress={() => navigate('ForgotPass')}
          />
        </Box>
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({

  picture: {
    width: height / 2,
    height: height / 2
  }

})

export default Welcome

