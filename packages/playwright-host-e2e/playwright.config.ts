import type { PlaywrightTestConfig } from '@playwright/test'
import { baseConfig } from '../../playwright.config.base.js'

const config: PlaywrightTestConfig = {
  ...baseConfig,
}

export default config
