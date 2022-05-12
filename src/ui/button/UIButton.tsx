import React, { FC } from 'react'
import { Pressable } from 'react-native'
import { Box, Text } from '../index'

type Variant = 'default' | 'primary' | 'transparent'

interface UiButtonProps {
  variant: Variant
  label: string
  onPress: () => void
}

const UiButton: FC<UiButtonProps> = ({ label, variant, onPress }) => {

  const backgroundColor = variant === 'primary' ? 'lightBlue' : variant === 'transparent' ? 'transparent' : 'gray'
  const color = variant === 'primary' ? 'white' : 'black'

  return (
    <Pressable {...{ onPress }}>
      <Box
        bg={backgroundColor}
        height={50}
        width={245}
        borderRadius='xl'
        justifyContent='center'
        alignItems='center'
      >
        <Text
          variant='label'
          color={color}
        >{label}</Text>
      </Box>
    </Pressable>
  )
}

UiButton.defaultProps = { variant: 'default' }

export default UiButton

