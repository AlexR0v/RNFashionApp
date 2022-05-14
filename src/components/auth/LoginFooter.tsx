import React, { FC }         from 'react'
import { Linking }           from 'react-native'
import { useNavigationAuth } from '../../hooks'
import { Box, Button, Text } from '../../ui'
import { SocialLogin }       from '../index'

interface LoginFooterProps {
  navPage: 'Register' | 'Login',
  whiteText: string
  blueText: string
  link?: string
}

const LoginFooter: FC<LoginFooterProps> = ({ navPage, whiteText, blueText, link }) => {

  const { navigate } = useNavigationAuth()

  return (
    <>
      <SocialLogin />
      <Button
        variant='transparent'
        onPress={() => link ? Linking.openURL(link) : navigate(navPage)}
      >
        <Box
          flexDirection='row'
          marginTop='ml'
        >
          <Text color='white'>{whiteText}</Text>
          <Text
            marginLeft='s'
            color='lightBlue'
          >{blueText}</Text>
        </Box>
      </Button>
    </>
  )
}

export default LoginFooter

