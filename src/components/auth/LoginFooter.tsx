import React, { FC }         from 'react'
import { useNavigation }     from '../../hooks'
import { Box, Button, Text } from '../../ui'
import { SocialLogin }       from '../index'

interface LoginFooterProps {
  navPage: 'Register' | 'Login',
  whiteText: string
  blueText: string
}

const LoginFooter: FC<LoginFooterProps> = ({ navPage, whiteText, blueText }) => {

  const { navigate } = useNavigation()

  return (
    <>
      <SocialLogin />
      <Button
        variant='transparent'
        onPress={() => navigate(navPage)}
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

