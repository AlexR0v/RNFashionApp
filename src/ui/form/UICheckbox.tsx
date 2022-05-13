import { useTheme }            from '@shopify/restyle'
import React, { FC, useState } from 'react'
import { Pressable }           from 'react-native'
import Icon                    from 'react-native-vector-icons/MaterialIcons'
import { Box, Text }           from '../index'
import { Theme }               from '../theme/theme'

interface UiCheckboxProps {
  label: string
}

const UiCheckbox: FC<UiCheckboxProps> = ({ label }) => {

  const [checked, setChecked] = useState(false)

  const theme: Theme = useTheme()

  return (
    <Pressable onPress={() => setChecked(prev => !prev)}>
      <Box flexDirection='row'>
        <Box
          bg={checked ? 'lightBlue' : 'white'}
          width={20}
          height={20}
          borderRadius='s'
          borderWidth={1}
          borderColor={checked ? 'lightBlue' : 'lightGray'}
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

