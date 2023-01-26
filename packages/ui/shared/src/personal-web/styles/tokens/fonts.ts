import { DM_Sans, Inter, Raleway, Source_Code_Pro, Space_Grotesk } from '@next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font',
})
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--space-grotesk-font',
})
export const raleway = Raleway({
  subsets: ['latin'],
  variable: '--raleway-font',
})
export const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--source-code-pro-font',
  fallback: [
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
  ],
})
export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--dm-sans-font',
  weight: '400',
  fallback: [
    'DM Sans',
    'Work Sans',
    'Open Sans',
    'Futura',
    'Helvetica',
    'Helvetica Neue',
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
  ],
})

const themeDefaults = {
  sans: `${spaceGrotesk.variable}`,
  mono: `${spaceGrotesk.variable}`,
  system: `${spaceGrotesk.variable}`,
}

export default {
  inter,
  sourceCodePro,
  themeDefaults,
  dmSans,
  raleway,
  spaceGrotesk,
}
