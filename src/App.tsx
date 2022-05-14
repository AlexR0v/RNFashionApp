import { NavigationContainer }          from '@react-navigation/native'
import { createNativeStackNavigator }   from '@react-navigation/native-stack'
import { ThemeProvider }                from '@shopify/restyle'
import React                            from 'react'
import { SafeAreaProvider }             from 'react-native-safe-area-context'
import { AuthNavigator, HomeNavigator } from './screens'
import { AppStackParamList }            from './types'
import { theme }                        from './ui'

const AppStack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name='Auth'
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name='Home'
        component={HomeNavigator}
        options={{ headerShown: false }}
      />
    </AppStack.Navigator>
  )
}

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
