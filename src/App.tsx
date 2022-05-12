import { NavigationContainer }                              from '@react-navigation/native'
import { createNativeStackNavigator }                       from '@react-navigation/native-stack'
import { ThemeProvider }                                    from '@shopify/restyle'
import React, { FC }                                        from 'react'
import { ForgotPass, Login, Onboarding, Register, Welcome } from './screens'
import { AuthStackParamList }                               from './types'
import { theme }                                            from './ui'

const AuthStack = createNativeStackNavigator<AuthStackParamList>()

const AuthNavigator: FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name='Onboarding'
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name='Welcome'
        component={Welcome}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name='ForgotPass'
        component={ForgotPass}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  )
}

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
