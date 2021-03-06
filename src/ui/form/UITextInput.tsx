import { useTheme }                  from '@shopify/restyle'
import React, { forwardRef }         from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { Icon }                      from '../icons'
import { Box }                       from '../index'
import { Theme }                     from '../theme/theme'

interface UiTextInputProps extends TextInputProps {
  icon?: string
  error?: string | undefined
  touched?: boolean | undefined
}

const UiTextInput = forwardRef<TextInput, UiTextInputProps>(({ icon, error, touched, ...props }, ref) => {

  const theme: Theme = useTheme()

  const color = error ? theme.colors.red : touched
    ? theme.colors.lightBlue
    : theme.colors.lightGray

  const colorTheme = error ? 'red' : touched
    ? 'lightBlue'
    : 'lightGray'

  return (
    <Box
      flexDirection='row'
      alignItems='center'
      height={48}
      borderWidth={1}
      borderColor={colorTheme}
      borderRadius='s'
    >
      <Box margin='s'>
        <Icon
          type='material'
          name={icon || ''}
          size={16}
          color={color}
        />
      </Box>
      <TextInput
        ref={ref}
        underlineColorAndroid='transparent'
        placeholderTextColor={theme.colors.lightGray}
        style={{ flex: 1, color: theme.colors.black }}
        {...props}
      />
      {
        touched && (
          <Box
            height={theme.borderRadii.m * 2}
            width={theme.borderRadii.m * 2}
            borderTopLeftRadius='m'
            borderBottomLeftRadius='m'
            borderTopRightRadius='m'
            borderBottomRightRadius='m'
            borderColor={colorTheme}
            borderWidth={1}
            alignItems='center'
            justifyContent='center'
            margin='s'
          >
            <Icon
              type='material'
              name={!error ? 'check' : 'close'}
              size={16}
              color={color}
            />
          </Box>
        )
      }
    </Box>
  )
})

export default UiTextInput

