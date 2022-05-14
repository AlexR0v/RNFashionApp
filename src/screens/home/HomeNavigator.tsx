import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { FC }             from 'react'
import { HomeStackParamList }    from '../../types'
import { Box, Text }             from '../../ui'
import Drawer, { DRAWER_WIDTH }  from './Drawer'

const HomeDrawer = createDrawerNavigator<HomeStackParamList>()

const HomeScreen = () => {
  return (
    <Box>
      <Text>Home</Text>
    </Box>
  )
}

const HomeNavigator: FC = () => {
  return (
    <HomeDrawer.Navigator
      screenOptions={{
        headerShown: false, drawerStyle: {
          width: DRAWER_WIDTH
        }
      }}
      drawerContent={props => <Drawer {...props} />}
    >
      <HomeDrawer.Screen
        name='OutfitIdeas'
        component={HomeScreen}
      />
    </HomeDrawer.Navigator>
  )
}

export default HomeNavigator

