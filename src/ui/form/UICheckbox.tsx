import React, { FC } from 'react'
import { Pressable } from 'react-native'
import Icon          from 'react-native-vector-icons/MaterialIcons'
import { useTheme }  from '../../hooks'
import { Box, Text } from '../index'

interface UiCheckboxProps {
  label: string
  value: boolean
  onValueChange: () => void
}

const UiCheckbox: FC<UiCheckboxProps> = ({ label, value, onValueChange }) => {

  const theme = useTheme()

  return (
    <Pressable onPress={() => onValueChange()}>
      <Box flexDirection='row'>
        <Box
          bg={value ? 'lightBlue' : 'white'}
          width={20}
          height={20}
          borderRadius='s'
          borderWidth={1}
          borderColor={value ? 'lightBlue' : 'lightGray'}
          marginRight='s'
        >
          <Icon
            name='check'
            size={16}
            color={theme.colors.white}
          />
        </Box>
        <Text>{label}</Text>
      </Box>
    </Pressable>
  )
}

export default UiCheckbox

