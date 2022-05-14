import { createDrawerNavigator } from '@react-navigation/drawer'
import React, { FC }             from 'react'
import { Box, Text }             from '../../ui'

const Drawer = createDrawerNavigator()

const HomeScreen = () => {
  return (
    <Box>
      <Text>Home</Text>
    </Box>
  )
}

const HomeNavigator: FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='HomeScreen'
        component={HomeScreen}
      />
    </Drawer.Navigator>
  )
}

export default HomeNavigator

