import React, { FC }                   from 'react'
import Icon                            from 'react-native-vector-icons/MaterialIcons'
import { ContainerRadius }             from '../../components'
import { useNavigationAuth, useTheme } from '../../hooks'
import { Box, Button, Text }           from '../../ui'
import CloseButton                     from '../../ui/button/CloseButton'

const ChangedPass: FC = () => {

  const { navigate } = useNavigationAuth()

  const theme = useTheme()

  return (
    <ContainerRadius
      footer={<CloseButton onPress={() => navigate('Login')} />}
    >
      <Box padding='xl'>
        <Box
          justifyContent='center'
          alignItems='center'
          marginBottom='xl'
        >
          <Box
            width={80}
            height={80}
            bg='lightBlueOpacity'
            style={{ borderRadius: 80 / 2 }}
            justifyContent='center'
            alignItems='center'
          >
            <Icon
              name='check'
              size={32}
              color={theme.colors.lightBlue}
            />
          </Box>
        </Box>
        <Text
          textAlign='center'
          variant='title2'
          marginBottom='l'
        >Your password was successfully changed</Text>
        <Text
          textAlign='center'
          variant='body'
          marginBottom='l'
        >Close this window and login again</Text>
        <Box
          alignItems='center'
          marginTop='l'
        >
          <Button
            variant='primary'
            onPress={() => navigate('Login')}
            label='Login again'
          />
        </Box>
      </Box>
    </ContainerRadius>
  )
}

export default ChangedPass

