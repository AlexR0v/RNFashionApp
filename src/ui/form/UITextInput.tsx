import { useTheme }                                                 from '@shopify/restyle'
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { KeyboardTypeOptions, TextInput, TextInputProps }           from 'react-native'
import Icon                                                         from 'react-native-vector-icons/MaterialIcons'
import { Box }                                                      from '../index'
import { Theme }                                                    from '../theme/theme'

interface UiTextInputProps extends TextInputProps {
  placeholder?: string
  icon?: string
  validator: (input: string) => boolean
  value: string
  changeValue: Dispatch<SetStateAction<string>>
  keyboardType?: KeyboardTypeOptions
}

const isValid = true
const isInvalid = false
const Pristine = null

type InputState = typeof isValid | typeof isInvalid | typeof Pristine

const UiTextInput: FC<UiTextInputProps> = ({
  placeholder,
  icon,
  validator,
  value,
  changeValue,
  keyboardType,
  ...props
}) => {

  const [valid, setValid] = useState<InputState>(Pristine)

  const theme: Theme = useTheme()

  const color = valid === isInvalid ? theme.colors.red : valid === isValid
    ? theme.colors.lightBlue
    : theme.colors.lightGray

  const colorTheme = valid === isInvalid ? 'red' : valid === isValid
    ? 'lightBlue'
    : 'lightGray'

  const onChangeValue = (value: string) => {
    setValid(Pristine)
    changeValue(value)
  }

  const validate = (value: string) => {
    if (validator(value)) {
      setValid(isValid)
    } else {
      setValid(isInvalid)
    }
  }

  useEffect(() => {
    if (validator(value)) {
      setValid(isValid)
    } else {
      setValid(Pristine)
    }
  }, [value])

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
          name={icon || ''}
          size={16}
          color={color}
        />
      </Box>
      <TextInput
        value={value}
        onChangeText={onChangeValue}
        underlineColorAndroid='transparent'
        placeholder={placeholder}
        placeholderTextColor={theme.colors.lightGray}
        style={{ flex: 1 }}
        keyboardType={keyboardType}
        onBlur={() => validate(value)}
        {...props}
      />
      {
        (valid === isValid || valid === isInvalid) && (
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
              name={valid === isValid ? 'check' : 'close'}
              size={16}
              color={color}
            />
          </Box>
        )
      }
    </Box>
  )
}

export default UiTextInput

