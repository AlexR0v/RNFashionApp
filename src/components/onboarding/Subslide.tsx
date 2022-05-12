import React, { FC }         from 'react'
import { Box, Button, Text } from '../../ui'

interface SubslideProps {
  description: string,
  subtitle: string,
  last?: boolean,
  onPress: () => void
}

const Subslide: FC<SubslideProps> = ({ subtitle, description, last, onPress }) => {
  return (
    <Box
      flex={1}
      justifyContent='center'
      alignItems='center'
      padding='2xl'
    >
      <Text
        marginBottom='m'
        variant='title2'
      >{subtitle}</Text>
      <Text
        marginBottom='xl'
        textAlign='center'
        variant='body'
      >{description}</Text>
      <Button
        label={last ? 'Let`s get started' : 'Next'}
        variant={last ? 'primary' : 'default'}
        onPress={onPress}
      />
    </Box>
  )
}

export default Subslide

