import { createNativeStackNavigator }                       from '@react-navigation/native-stack'
import React, { FC }                                        from 'react'
import { AuthStackParamList }                               from '../../types'
import ChangedPass                                          from './ChangedPass'
import { ForgotPass, Login, Onboarding, Register, Welcome } from './index'

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
      <AuthStack.Screen
        name='ChangedPass'
        component={ChangedPass}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator

