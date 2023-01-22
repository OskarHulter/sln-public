import { Theme } from '@nextui-org/react'
import colors from '../tokens/colors.js'
import fonts from '../tokens/fonts.js'

const sharedTheme: Theme = {
  theme: {
    colors,
    fonts: fonts.themeDefaults,
  },
}

export default sharedTheme
