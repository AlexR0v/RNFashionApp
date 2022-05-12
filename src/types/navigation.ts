import { CompositeNavigationProp, NavigationProp } from '@react-navigation/native'

export type AuthStackParamList = {
  Onboarding: undefined
  Welcome: undefined
  ForgotPass: undefined
  Register: undefined
  Login: undefined
}

export type AuthScreenRouteProp = CompositeNavigationProp<NavigationProp<AuthStackParamList, 'Welcome' | 'Login' | 'ForgotPass'>,
  NavigationProp<AuthStackParamList, 'Onboarding' | 'Register'>>
