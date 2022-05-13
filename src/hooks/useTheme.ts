import { useTheme as useReTheme } from '@shopify/restyle'
import { Theme }                  from '../ui/theme/theme'

export const useTheme = () => useReTheme<Theme>()
