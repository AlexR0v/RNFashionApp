import React, { FC }                               from 'react'
import { ContainerRadius, LoginFooter, LoginForm } from '../../components'
import { Box, Text }                               from '../../ui'

const Login: FC = () => {
  return (
    <ContainerRadius
      footer={
        <LoginFooter
          navPage='Register'
          whiteText='Don`t have an account?'
          blueText='Sign Up here'
        />}
    >
      <Box padding='xl'>
        <Text
          textAlign='center'
          variant='title2'
          marginBottom='l'
        >Welcome back</Text>
        <Text
          textAlign='center'
          variant='body'
          marginBottom='l'
        >Use your credentials below and login to your account</Text>
        <LoginForm />
      </Box>
    </ContainerRadius>
  )
}

export default Login

