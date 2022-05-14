import React, { FC } from 'react'

interface FontIconProps {
  type: 'materials_icons'
  name: string
  color?: string
  size?: number
}

const types = {
  'materials_icons': require('react-native-vector-icons/MaterialIcons')
}

const FontIcon: FC<FontIconProps> = ({ type, name, color, size }) => {

  const Icon = types[type]

  return (
    <Icon
      name={name}
      size={size}
      color={color}
    />
  )
}

export default FontIcon

