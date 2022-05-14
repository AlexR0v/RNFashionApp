import { CompositeNavigationProp, NavigationProp } from '@react-navigation/native'

export type AuthStackParamList = {
  Onboarding: undefined
  Welcome: undefined
  ForgotPass: undefined
  Register: undefined
  Login: undefined
  ChangedPass: undefined
}

export type AppStackParamList = {
  Auth: undefined
  Home: undefined
}

export type HomeStackParamList = {
  HomeScreen: undefined
}

export type AuthScreenRouteProp = CompositeNavigationProp<NavigationProp<AuthStackParamList, 'Welcome' | 'Login' | 'ForgotPass' | 'Onboarding' | 'Register'>,
  NavigationProp<AppStackParamList, 'Auth' | 'Home'>>

export type HomeScreenRouteProp = CompositeNavigationProp<NavigationProp<HomeStackParamList, 'HomeScreen'>,
  NavigationProp<AppStackParamList, 'Auth' | 'Home'>>
