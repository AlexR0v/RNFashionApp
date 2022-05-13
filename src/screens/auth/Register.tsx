import React, { FC }                                  from 'react'
import { ContainerRadius, LoginFooter, RegisterForm } from '../../components'
import { Box, Text }                                  from '../../ui'

const Register: FC = () => {
  return (
    <ContainerRadius
      left
      footer={<LoginFooter
        navPage='Login'
        whiteText='Already have an account?'
        blueText='Login here'
      />}
    >
      <Box padding='xl'>
        <Text
          textAlign='center'
          variant='title2'
          marginBottom='l'
        >Create account</Text>
        <Text
          textAlign='center'
          variant='body'
          marginBottom='l'
        >Let`s us know what your name, email and your password</Text>
        <RegisterForm />
      </Box>
    </ContainerRadius>
  )
}

export default Register

