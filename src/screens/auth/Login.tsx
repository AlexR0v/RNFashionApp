import { useNavigation }                          from '@react-navigation/native'
import { useTheme }                               from '@shopify/restyle'
import React, { FC, useEffect, useState }         from 'react'
import { Keyboard }                               from 'react-native'
import { ContainerRadius, SocialLogin }           from '../../components'
import { AuthScreenRouteProp }                    from '../../types'
import { Box, Button, Checkbox, Text, TextInput } from '../../ui'
import { Theme }                                  from '../../ui/theme/theme'

const emailValidator = (email: string): boolean => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
}

const passwordValidator = (password: string): boolean => {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(password)
}

const Login: FC = () => {

  const { navigate } = useNavigation<AuthScreenRouteProp>()

  const theme: Theme = useTheme()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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
    <ContainerRadius
      footer={
        <>
          <SocialLogin />
          <Button
            variant='transparent'
            onPress={() => navigate('Register')}
          >
            <Box
              flexDirection='row'
              marginTop='ml'
            >
              <Text color='white'>Don`t have an account?</Text>
              <Text
                marginLeft='s'
                color='lightBlue'
              >Sign Up here</Text>
            </Box>
          </Button>
        </>
      }
    >
      <Box padding='xl'>
        {
          isKeyboardVisible ? null :
            <Text
              textAlign='center'
              variant='title2'
              marginBottom='l'
            >Welcome back</Text>
        }
        <Text
          textAlign='center'
          variant='body'
          marginBottom='l'
        >Use your credentials below and login to your account</Text>
        <TextInput
          icon='email'
          placeholder='Enter your email'
          validator={emailValidator}
          value={email}
          changeValue={setEmail}
          keyboardType='email-address'
        />
        <Box height={theme.spacing.ml} />
        <TextInput
          icon='https'
          placeholder='Enter your password'
          validator={passwordValidator}
          value={password}
          changeValue={setPassword}
        />
        <Box
          flexDirection='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Checkbox label='Remember me' />
          <Button
            variant='transparent'
            onPress={() => navigate('ForgotPass')}
          >
            <Text color='lightBlue'>Forgot password</Text>
          </Button>
        </Box>
        <Box
          alignItems='center'
          marginTop='m'
        >
          <Button
            variant='primary'
            onPress={() => {}}
            label='Log into your account'
          />
        </Box>
      </Box>
    </ContainerRadius>
  )
}

export default Login

