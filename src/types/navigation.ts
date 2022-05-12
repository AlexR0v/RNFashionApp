import { CompositeNavigationProp, NavigationProp } from '@react-navigation/native'

export type AuthStackParamList = {
  Onboarding: undefined
  Welcome: undefined
}

export type AuthScreenRouteProp = CompositeNavigationProp<NavigationProp<AuthStackParamList, 'Welcome'>,
  NavigationProp<AuthStackParamList, 'Onboarding'>>
