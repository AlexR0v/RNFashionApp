import { NavigationContainer }        from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FC }                  from 'react'
import { Onboarding, Welcome }        from './screens'
import { AuthStackParamList }         from './types'

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
    </AuthStack.Navigator>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  )
}

export default App
