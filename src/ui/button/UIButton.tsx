import React, { FC }                    from 'react'
import { ActivityIndicator, Pressable } from 'react-native'
import { Box, Text }                    from '../index'

type Variant = 'default' | 'primary' | 'transparent'

interface UiButtonProps {
  variant: Variant
  label?: string
  onPress: () => void
  children?: React.ReactNode
  loading?: boolean
}

const UiButton: FC<UiButtonProps> = ({ label, loading, variant, onPress, children }) => {

  const backgroundColor = variant === 'primary' ? 'lightBlue' : variant === 'transparent' ? 'transparent' : 'gray'
  const color = variant === 'primary' ? 'white' : 'black'

  return (
    <Pressable onPress={() => loading ? null : onPress()}>
      <Box
        bg={backgroundColor}
        height={50}
        width={245}
        borderRadius='xl'
        justifyContent='center'
        alignItems='center'
      >
        {
          loading ?
            <ActivityIndicator /> :
            <>
              {
                label ?
                  <Text
                    variant='label'
                    color={color}
                  >{label}</Text> :
                  children
              }
            </>
        }
      </Box>
    </Pressable>
  )
}

UiButton.defaultProps = { variant: 'default' }

export default UiButton

