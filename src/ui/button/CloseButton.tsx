import React, { FC } from 'react'
import { Pressable } from 'react-native'
import Icon          from 'react-native-vector-icons/MaterialIcons'
import { useTheme }  from '../../hooks'
import { Box }       from '../index'

interface UiButtonProps {
  onPress: () => void
}

const CloseButton: FC<UiButtonProps> = ({ onPress }) => {

  const theme = useTheme()

  return (
    <Pressable {...{ onPress }}>
      <Box
        width={50}
        height={50}
        bg='lightGray'
        marginVertical='xl'
        borderRadius='xl'
        justifyContent='center'
        alignItems='center'
      >
        <Icon
          name='close'
          size={25}
          color={theme.colors.black}
        />
      </Box>
    </Pressable>
  )
}

export default CloseButton

