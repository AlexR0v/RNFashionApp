import { useNavigation as useNav }                  from '@react-navigation/native'
import { AuthScreenRouteProp, HomeScreenRouteProp } from '../types'

export const useNavigationAuth = () => useNav<AuthScreenRouteProp>()
export const useNavigationHome = () => useNav<HomeScreenRouteProp>()
