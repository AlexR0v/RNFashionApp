import React, { FC }                    from 'react'
import { ContainerRadius, LoginFooter } from '../../components'
import { Text }                         from '../../ui'

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
      <Text variant='title2'>Register</Text>
    </ContainerRadius>
  )
}

export default Register

