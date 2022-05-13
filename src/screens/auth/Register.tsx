import { useNavigation }                from '@react-navigation/native'
import React, { FC }                    from 'react'
import { ContainerRadius, SocialLogin } from '../../components'
import { AuthScreenRouteProp }          from '../../types'
import { Box, Button, Text }            from '../../ui'

const Register: FC = () => {
  const { navigate } = useNavigation<AuthScreenRouteProp>()

  const Footer = () => (
    <>
      <SocialLogin />
      <Button
        variant='transparent'
        onPress={() => navigate('Login')}
      >
        <Box
          flexDirection='row'
          marginTop='ml'
        >
          <Text color='white'>Already have an account?</Text>
          <Text
            marginLeft='s'
            color='lightBlue'
          >Login here</Text>
        </Box>
      </Button>
    </>
  )

  return (
    <ContainerRadius
      left
      footer={<Footer />}
    >
      <Text variant='title2'>Register</Text>
    </ContainerRadius>
  )
}

export default Register

