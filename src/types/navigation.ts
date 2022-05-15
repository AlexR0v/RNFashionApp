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
  'Outfit Ideas': undefined
  'Favorite Outfits': undefined
  'Edit Profile': undefined
  'Transactions History': undefined
  'Notifications Settings': undefined
  Auth: undefined
  Cart: undefined
}

export type AuthScreenRouteProp = CompositeNavigationProp<NavigationProp<AuthStackParamList, 'Welcome' | 'Login' | 'ForgotPass' | 'Onboarding' | 'Register'>,
  NavigationProp<AppStackParamList, 'Auth' | 'Home'>>

export type HomeScreenRouteProp = CompositeNavigationProp<NavigationProp<HomeStackParamList,
  'Outfit Ideas' |
  'Edit Profile' |
  'Transactions History' |
  'Notifications Settings' |
  'Auth' |
  'Cart' |
  'Favorite Outfits'>,
  NavigationProp<AppStackParamList, 'Auth' | 'Home'>>
