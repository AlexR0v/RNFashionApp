import React, { FC }                                    from 'react'
import { ContainerRadius, ForgotPassForm, LoginFooter } from '../../components'
import { Box, Text }                                    from '../../ui'

interface ForgotPassProps {

}

const ForgotPass: FC<ForgotPassProps> = () => {
  return (
    <ContainerRadius
      center
      footer={<LoginFooter
        link='https://google.com'
        navPage='Login'
        whiteText='Don`t work?'
        blueText='Try another way'
      />}
    >
      <Box padding='xl'>
        <Text
          textAlign='center'
          variant='title2'
          marginBottom='l'
        >Forgot password?</Text>
        <Text
          textAlign='center'
          variant='body'
          marginBottom='l'
        >Enter the email address associated with your account</Text>
        <ForgotPassForm />
      </Box>
    </ContainerRadius>
  )
}

export default ForgotPass

