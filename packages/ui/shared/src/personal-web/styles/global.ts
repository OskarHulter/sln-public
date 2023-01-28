import { globalCss } from '@nextui-org/react'

export default globalCss({
  '@import': '/main.css',
  '@font-face': [
    {
      fontFamily: 'var(--nextui-fonts-sans)',
      fontWeight: '$variable',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
  ],
  p: {
    fontSize: 'clamp(1rem, 5vw, 1.5rem)',
  },
  html: {
    padding: 0,
    margin: 0,
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
  '*:focus': {
    outline: `2px solid $secondary`,
    outlineOffset: '-2px',
  },
  '.nextui-user-info': {
    visibility: 'hidden',
    width: '0',
  },
  // footer: {
  //   display: 'flex',
  //   position: 'sticky',
  //   justifyContent: 'space-between',
  //   zIndex: 200,
  //   bottom: 0,
  //   left: 0,
  //   padding: '0 0 $1 0',
  //   '@xs': {
  //     padding: '0 $8 $1 $8',
  //     overflow: 'scroll',
  //   },
  // },
  '@supports(100dvh)': {
    body: {
      minHeight: '100dvh',
      minWidth: '100vw',
    },
  },
})

// header: {
//   maxWidth: 'var(--site-max-w)',
//   position: 'sticky',
//   zIndex: 200,
//   top: 0,
//   left: 0,
//   padding: '0 $10 0 $10',
//   justifyContent: 'space-between',
//   alignItems: 'center',
// },
