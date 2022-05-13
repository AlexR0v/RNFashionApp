import { useNavigation as useNav } from '@react-navigation/native'
import { AuthScreenRouteProp }     from '../types'

export const useNavigation = () => useNav<AuthScreenRouteProp>()
