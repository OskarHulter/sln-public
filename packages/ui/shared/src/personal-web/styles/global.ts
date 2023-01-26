import { globalCss } from '@nextui-org/react'
import { spaceGrotesk } from './tokens/fonts'

export default globalCss({
  '@import': '/main.css',
  '@font-face': [
    {
      fontFamily: spaceGrotesk.variable,
      fontWeight: '$variable',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
  ],
  '*:focus': {
    outline: `2px solid $secondary`,
    outlineOffset: '-2px',
  },
  html: {
    padding: 0,
    margin: 0,
    fontFamily: spaceGrotesk.variable,
    fontSize: '$base',
    lineHeight: '$base',
    color: '$black',
    webkitTextSizeAdjust: '100%',
    scrollBehavior: 'smooth',
  },
  body: {
    margin: 0,
    padding: 0,
    fontFamily: 'inherit',
    lineHeight: 'inherit',
    overflowX: 'hidden',
  },
})
