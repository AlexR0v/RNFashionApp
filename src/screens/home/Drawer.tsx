import { DrawerContentComponentProps }   from '@react-navigation/drawer'
import React                             from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'
import { Box }                           from '../../ui'
import DrawerItems                       from './DrawerItems'

const { width } = Dimensions.get('window')
export const DRAWER_WIDTH = width
const aspect_ratio = 1080 / 1920
const height = DRAWER_WIDTH * aspect_ratio

const items = [
  {
    icon: 'flash',
    iconType: 'entypo',
    color: 'lightBlue',
    screen: 'OutfitIdeas',
    label: 'Outfit Ideas'
  },
  {
    icon: 'heart',
    iconType: 'antdesign',
    color: 'red',
    screen: 'FavoriteOutfits',
    label: 'Favorite Outfits'
  },
  {
    icon: 'user',
    iconType: 'font-awesome',
    color: 'orange',
    screen: 'EditProfile',
    label: 'Edit Profile'
  },
  {
    icon: 'time',
    iconType: 'ionicon',
    color: 'pink',
    screen: 'TransactionsHistory',
    label: 'Transactions History'
  },
  {
    icon: 'settings',
    iconType: 'ionicon',
    color: 'violet',
    screen: 'NotificationsSettings',
    label: 'Notifications Settings'
  },
  {
    icon: 'log-out',
    iconType: 'entypo',
    color: 'black',
    screen: 'Logout',
    label: 'Logout'
  }
]

const Drawer = (props: DrawerContentComponentProps) => {
  return (
    <Box
      flex={1}
      overflow='hidden'
    >
      <Box
        flex={0.2}
        bg='white'
      >
        <Box
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg='black'
          borderBottomRightRadius='xxxl'
        />
      </Box>
      <Box flex={0.8}>
        <Box
          flex={1}
          bg='black'
        />
        <Box
          flex={1}
          bg='lightBlue'
          overflow='hidden'
        />
        <Image
          style={{
            position: 'absolute',
            bottom: -height * 0.61,
            height,
            width: DRAWER_WIDTH,
            right: 0,
            left: 90
          }}
          source={require(
            '../../assets/img/1580821161_3-p-foni-s-kruzhochkami-5.jpeg')}
        />
        <Box
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg='white'
          borderTopLeftRadius='xxxl'
          borderBottomRightRadius='xxxl'
        >
          {
            items.map(item => (
              <DrawerItems
                key={item.label} {...item}
              />
            ))
          }
        </Box>
      </Box>
      <Box
        width={DRAWER_WIDTH}
        height={height * 0.61}
        bg='white'
      >
        <Image
          style={{ ...StyleSheet.absoluteFillObject, width, height }}
          source={require(
            '../../assets/img/1580821161_3-p-foni-s-kruzhochkami-5.jpeg')}
        />
      </Box>
    </Box>
  )
}

export default Drawer
