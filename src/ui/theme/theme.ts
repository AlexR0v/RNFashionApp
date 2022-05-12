import { createTheme } from '@shopify/restyle'

const palette = {
  black: '#0c0d34',
  white: '#ffffff',
  lightBlue: '#2cb2b0',
  gray: 'rgba(12, 13, 52, 0.05)',
  lightGray: '#d9d9d9',
  transparent: 'transparent'
}

const theme = createTheme({
  colors: {
    white: palette.white,
    black: palette.black,
    lightBlue: palette.lightBlue,
    lightGray: palette.lightGray,
    gray: palette.gray,
    transparent: palette.transparent
  },
  spacing: {
    s: 8,
    m: 12,
    l: 25,
    xl: 40,
    '2xl': 44
  },
  borderRadii: {
    xl: 25,
    xxxl: 75
  },
  breakpoints: {
    phone: 0,
    tablet: 768
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: 'white',
      fontFamily: 'SFProText-Bold',
      fontWeight: '700',
      textAlign: 'center'
    },
    title1: {
      fontSize: 28,
      fontFamily: 'SFProText-SemiBold',
      fontWeight: '700',
      color: 'black'
    },
    title2: {
      fontFamily: 'SFProText-SemiBold',
      fontWeight: '700',
      fontSize: 24,
      lineHeight: 30,
      color: 'black'
    },
    body: {
      fontFamily: 'SFProText-Regular',
      fontSize: 16,
      lineHeight: 24,
      color: 'black'
    },
    label: {
      fontSize: 15,
      fontFamily: 'SFProText-Regular'
    }
  }
})

export type Theme = typeof theme;
export default theme
