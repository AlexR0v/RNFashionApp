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
  OutfitIdeas: undefined
  FavoriteOutfits: undefined
  EditProfile: undefined
  TransactionsHistory: undefined
  NotificationsSettings: undefined
  Logout: undefined
}

export type AuthScreenRouteProp = CompositeNavigationProp<NavigationProp<AuthStackParamList, 'Welcome' | 'Login' | 'ForgotPass' | 'Onboarding' | 'Register'>,
  NavigationProp<AppStackParamList, 'Auth' | 'Home'>>

export type HomeScreenRouteProp = CompositeNavigationProp<NavigationProp<HomeStackParamList,
  'OutfitIdeas' |
  'EditProfile' |
  'TransactionsHistory' |
  'NotificationsSettings' |
  'Logout' |
  'FavoriteOutfits'>,
  NavigationProp<AppStackParamList, 'Auth' | 'Home'>>
