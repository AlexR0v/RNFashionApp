import React, { FC }                           from 'react'
import { Dimensions }                          from 'react-native'
import { Box }                                 from '../../ui'
import { AppleIcon, FaceBookIcon, GoogleIcon } from '../../ui/icons'

interface SocialLoginProps {

}

const { width } = Dimensions.get('window')

const SocialLogin: FC<SocialLoginProps> = () => {
  return (
    <Box
      flexDirection='row'
      alignItems='center'
      justifyContent='space-between'
      width={width / 2}
    >
      <Box
        width={50}
        height={50}
      >
        <FaceBookIcon />
      </Box
      >
      <Box
        width={50}
        height={50}
        bg='white'
        borderRadius='xl'
      >
        <GoogleIcon
          top='25%'
          left='25%'
          width={50}
          height={50}
        />
      </Box>
      <Box
        width={50}
        height={50}
        bg='white'
        borderRadius='xl'
      >
        <AppleIcon
          top='23%'
          left='23%'
          width={25}
          height={25}
        />
      </Box>
    </Box>
  )
}

export default SocialLogin

