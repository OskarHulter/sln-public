import { Theme } from '@nextui-org/react'
import colors from '../tokens/colors'
import fonts from '../tokens/fonts'

const sharedTheme: Theme = {
  theme: {
    colors,
    fonts: fonts.themeDefaults,
  },
}

export default sharedTheme
