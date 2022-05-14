import React, { FC }          from 'react'
import { Pressable }          from 'react-native'
import { useNavigationHome }  from '../../hooks'
import { HomeStackParamList } from '../../types'
import { Box, Text }          from '../../ui'
import { Icon }               from '../../ui/icons'
import { IconType }           from '../../ui/icons/FontIcon'
import { Theme }              from '../../ui/theme/theme'

export interface DrawerItemsProps {
  icon: string
  iconType: IconType
  color: keyof Theme['colors']
  screen: keyof HomeStackParamList
  label: string
}

const DrawerItems: FC<DrawerItemsProps> = ({ screen, color, icon, iconType, label, children }) => {

  const { navigate } = useNavigationHome()

  return (
    <Pressable onPress={() => navigate(screen)}>
      <Box
        flexDirection='row'
        alignItems='center'
      >
        <Box
          width={50}
          height={50}
          bg={color}
          marginVertical='m'
          borderRadius='xl'
          justifyContent='center'
          alignItems='center'
        >
          <Icon
            type={iconType}
            name={icon}
            size={25}
            color='#fff'
          />
        </Box>
        <Text>{label}</Text>
      </Box>
    </Pressable>
  )
}

export default DrawerItems

