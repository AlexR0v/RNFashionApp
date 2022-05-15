import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { FC }             from 'react'
import { Pressable }             from 'react-native'
import { Drawer, DRAWER_WIDTH }  from '../../components'
import { useNavigationHome }     from '../../hooks'
import { HomeStackParamList }    from '../../types'
import { Box, Text }             from '../../ui'
import { Icon }                  from '../../ui/icons'
import Cart                      from './Cart'
import EditProfile               from './EditProfile'
import FavoriteOutfits           from './FavoriteOutfits'
import NotificationsSettings     from './NotificationsSettings'
import OutfitIdeas               from './OutfitIdeas'
import TransactionsHistory       from './TransactionsHistory'

const HomeDrawer = createDrawerNavigator<HomeStackParamList>()

const HomeScreen = () => {
  return (
    <Box>
      <Text>Home</Text>
    </Box>
  )
}

const HomeNavigator: FC = () => {

  const { navigate } = useNavigationHome()

  return (
    <HomeDrawer.Navigator
      screenOptions={{
        //headerShown: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          textTransform: 'uppercase',
          fontSize: 16
        },
        headerStyle: {
          backgroundColor: 'white'
        },
        headerShadowVisible: false,
        drawerStyle: {
          width: DRAWER_WIDTH
        },
        headerRight: () => (
          <Pressable
            style={{ paddingRight: 20 }}
            onPress={() => navigate('Cart')}
          >
            <Icon
              type='antdesign'
              name='shoppingcart'
              color='#000000'
              size={25}
            />
          </Pressable>
        )
      }}
      drawerContent={props => <Drawer {...props} />}
    >
      <HomeDrawer.Screen
        name='Outfit Ideas'
        component={OutfitIdeas}
      />
      <HomeDrawer.Screen
        name='Favorite Outfits'
        component={FavoriteOutfits}
      />
      <HomeDrawer.Screen
        name='Cart'
        component={Cart}
      />
      <HomeDrawer.Screen
        name='Notifications Settings'
        component={NotificationsSettings}
      />
      <HomeDrawer.Screen
        name='Transactions History'
        component={TransactionsHistory}
      />
      <HomeDrawer.Screen
        name='Edit Profile'
        component={EditProfile}
      />
    </HomeDrawer.Navigator>
  )
}

export default HomeNavigator

