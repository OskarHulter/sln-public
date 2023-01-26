import { Theme } from '@nextui-org/react'
import colors from '../tokens/colors'
import { spaceGrotesk } from '../tokens/fonts'

const sharedTheme: Theme = {
  theme: {
    colors,
    fonts: {
      sans: `${spaceGrotesk.variable}`,
      mono: `${spaceGrotesk.variable}`,
      system: `${spaceGrotesk.variable}`,
    },
  },
}

export default sharedTheme
