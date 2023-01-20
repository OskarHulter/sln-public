import { globalCss } from '@nextui-org/react'
import { inter } from '../../assets/fonts/index.js'

// @media(max - width: 600px) {
//   .container {
//     /* overflow: auto; */
//   }
//   .grid {
//     min - width: 37rem
//     flex - direction: row
//     margin: 12rem - 2.2rem
//     max - height: 40rem
//     padding: 2rem
//     justify - content: space - around
//   }
// }

export const globalMinimal = globalCss({
  '@font-face': [
    {
      fontFamily: inter.variable,
      fontWeight: '$variable',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
  ],
  '&.container': {
    maxHeight: '1400vh',
    maxWidth: '1400vw',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto',
    zIndex: '-1',
    overflowY: 'hidden',
  },
  '&.grid': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    /* margin: 6rem auto; */
    width: '100%',
    height: '100%',
  },
  '*:focus': {
    outline: `2px solid $secondary`,
    outlineOffset: '-2px',
  },
  html: {
    padding: 0,
    margin: 0,
    fontFamily: inter.variable,
    fontSize: '$base',
    lineHeight: '$base',
    color: '$black',
    tabSize: '4',
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
  button: {
    border: 0,
    cursor: 'pointer',
    padding: 0,
  },
})

export default globalMinimal
