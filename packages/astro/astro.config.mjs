import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import solid from '@astrojs/solid-js'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  outDir: '../../dist/packages/astro',
  integrations: [react(), solid(), partytown(), sitemap(), tailwind()],
})
