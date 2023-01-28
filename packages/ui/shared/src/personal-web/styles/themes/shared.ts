import { Theme } from '@nextui-org/react'
import colors from '../tokens/colors'

const sharedTheme: Theme = {
  theme: {
    colors,
    fonts: {
      sans: 'var(--inter-font)',
      mono: 'var(--inter- font)',
      system: 'var(--inter-font)',
    },
  },
}

export default sharedTheme
