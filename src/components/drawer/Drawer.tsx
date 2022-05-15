import { DrawerContentComponentProps }              from '@react-navigation/drawer'
import React                                        from 'react'
import { Dimensions, Image, Pressable, StyleSheet } from 'react-native'
import { useNavigationHome }                        from '../../hooks'
import { Box, Text }                                from '../../ui'
import { Icon }                                     from '../../ui/icons'
import DrawerItems, { DrawerItemsProps }            from './DrawerItems'

const { width } = Dimensions.get('window')
export const DRAWER_WIDTH = width
const aspect_ratio = 1080 / 1920
const height = DRAWER_WIDTH * aspect_ratio

type Item = Omit<DrawerItemsProps, 'drawerProps'>

const items: Item[] = [
  {
    icon: 'flash',
    iconType: 'entypo',
    color: 'lightBlue',
    screen: 'Outfit Ideas',
    label: 'Outfit Ideas'
  },
  {
    icon: 'heart',
    iconType: 'antdesign',
    color: 'red',
    screen: 'Favorite Outfits',
    label: 'Favorite Outfits'
  },
  {
    icon: 'user',
    iconType: 'font-awesome',
    color: 'orange',
    screen: 'Edit Profile',
    label: 'Edit Profile'
  },
  {
    icon: 'time',
    iconType: 'ionicon',
    color: 'pink',
    screen: 'Transactions History',
    label: 'Transactions History'
  },
  {
    icon: 'settings',
    iconType: 'ionicon',
    color: 'violet',
    screen: 'Notifications Settings',
    label: 'Notifications Settings'
  },
  {
    icon: 'log-out',
    iconType: 'entypo',
    color: 'black',
    screen: 'Auth',
    label: 'Logout'
  }
]

const Drawer = (props: DrawerContentComponentProps) => {

  const { navigate } = useNavigationHome()

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
          flexDirection='row'
          justifyContent='space-between'
          padding='xl'
        >
          <Pressable onPress={() => props.navigation.closeDrawer()}>
            <Icon
              type='material'
              name='close'
              color='#fff'
              size={25}
            />
          </Pressable>
          <Text color='white'>MY PROFILE</Text>
          <Pressable onPress={() => navigate('Cart')}>
            <Icon
              type='antdesign'
              name='shoppingcart'
              color='#fff'
              size={25}
            />
          </Pressable>
        </Box>
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
          justifyContent='center'
          paddingHorizontal='xl'
        >
          <Box
            position='absolute'
            top={-50}
            bg='lightBlue'
            height={100}
            width={100}
            style={{ borderRadius: 50 }}
            alignSelf='center'
          />
          <Box marginVertical='m'>
            <Text
              variant='title1'
              textAlign='center'
            >Alexey Ponomarev</Text>
            <Text
              variant='body'
              textAlign='center'
            >mail.ponomarev@yandex.ru</Text>
          </Box>
          {
            items.map(item => (
              <DrawerItems
                key={item.label} {...item}
                drawerProps={props}
              />
            ))
          }
        </Box>
      </Box>
      <Box
        width={DRAWER_WIDTH}
        height={height * 0.3}
        bg='white'
        borderBottomLeftRadius='xxxl'
      >
        <Image
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            borderTopLeftRadius: 75
          }}
          source={require(
            '../../assets/img/1580821161_3-p-foni-s-kruzhochkami-5.jpeg')}
        />
      </Box>
    </Box>
  )
}

export default Drawer
