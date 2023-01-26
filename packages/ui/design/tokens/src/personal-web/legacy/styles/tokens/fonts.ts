import { DM_Sans, Inter, Raleway, Source_Code_Pro, Space_Grotesk } from '@next/font/google'

const fallbacksSafe = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Oxygen',
  'Ubuntu',
  'Cantarell',
  'Fira Sans',
  'Droid Sans',
  'sans-serif',
]

const fallbacksSans = [
  'DM Sans',
  'Work Sans',
  'Open Sans',
  'Futura',
  'Helvetica',
  'Helvetica Neue',
  ...fallbacksSafe,
]

const fallbacksMono = [
  'IBM Plex Mono',
  'Fira Code',
  'Source Code Pro',
  'Menlo',
  'Monaco',
  'Lucida Console',
  'Liberation Mono',
  'DejaVu Sans Mono',
  'Bitstream Vera Sans Mono',
  'mono',
]
export const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font',
  fallback: fallbacksSans,
})
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--space-grotesk-font',
  fallback: fallbacksSans,
})
export const raleway = Raleway({
  subsets: ['latin'],
  variable: '--raleway-font',
  fallback: fallbacksSans,
})
export const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--source-code-pro-font',
  fallback: fallbacksMono,
})
export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--dm-sans-font',
  weight: '400',
  fallback: fallbacksSans,
})

const themeDefaults = {
  sans: `${inter.variable}`,
  mono: `${sourceCodePro.variable}`,
  system: `${inter.variable}`,
}

export default {
  inter,
  sourceCodePro,
  themeDefaults,
}
