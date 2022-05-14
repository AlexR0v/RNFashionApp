import React, { FC } from 'react'
import getIconType   from '../../utils/getIconType'

interface FontIconProps {
  type: IconType
  name: string
  color?: string
  size?: number
}

export type IconType =
  | 'material'
  | 'material-community'
  | 'simple-line-icon'
  | 'zocial'
  | 'font-awesome'
  | 'octicon'
  | 'ionicon'
  | 'foundation'
  | 'evilicon'
  | 'entypo'
  | 'antdesign'
  | 'font-awesome-5'
  | 'feather'
  | 'fontisto'

const FontIcon: FC<FontIconProps> = ({ type, name, color, size }) => {

  const Icon = getIconType(type)

  return (
    <Icon
      name={name}
      size={size}
      color={color}
    />
  )
}

export default FontIcon

