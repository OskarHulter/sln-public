import { globalCss } from '@nextui-org/react'
import { inter } from '../../assets/fonts/index.js'

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: inter.variable,
      fontWeight: '$variable',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
  ],
  '::selection': {
    backgroundColor: '$secondary',
  },

  '*, ::before, ::after': {
    boxSizing: 'border-box',
    borderWidth: '0',
    borderStyle: 'solid',
    borderColor: 'currentColor',
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
    /*
    backgroundImage: `${redBlueSmokeUrl}`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
    */
  },

  'b, strong': {
    fontWeight: '$bold',
  },

  button: {
    border: 0,
    cursor: 'pointer',
    background: 'transparent',
    padding: 0,
  },

  input: {
    fontFamily: '$sans',
    appearance: 'none',
    // "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active":
    //   {
    //     boxShadow: `0 0 0 30px ${polychrome(colors.secondary)
    //       .lighten(82)
    //       .hex()} inset !important`,
    //   },
  },

  'h1, h2, h3, h4, h5, h6, p, pre': {
    fontFamily: '$sans',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    margin: `0`,
  },
  'ul, ol': {
    paddingInlineStart: '$large',
    margin: `0 0 $contentSpacing 0`,
  },
  article: {
    width: '100%',
    margin: '0 auto 0 auto',
    maxWidth: '200ch',
  },
  p: {
    maxWidth: '66ch',
  },
  a: {
    color: 'inherit',
    textDecoration: 'inherit',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  svg: {
    display: 'block',
    verticalAlign: 'middle',
    shapeRendering: 'auto',
    textRendering: 'optimizeLegibility',
  },
  pre: {
    borderRadius: '0.25rem',
    overflow: 'scroll',
    padding: '0.5rem 0.75rem',
  },

  figure: {
    textAlign: 'center',
    fontSize: '$small',
    margin: 0,
    padding: 0,
    marginBottom: '$small',
  },

  figCaption: {
    color: '$grey',
    marginTop: `-$small`,
    marginBottom: '$default',
  },

  blockquote: {
    fontStyle: 'italic',
    '& p': {
      marginBottom: '$xxxsmall',
    },
    marginBottom: '$contentSpacing',
  },
})

export default globalStyles
