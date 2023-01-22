import { Inter, Source_Code_Pro } from '@next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--inter-font',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
})
export const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--source-code-pro-font',
  fallback: [
    'Menlo',
    'Monaco',
    'Lucida Console',
    'Liberation Mono',
    'DejaVu Sans Mono',
    'Bitstream Vera Sans Mono',
    'mono',
  ],
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
