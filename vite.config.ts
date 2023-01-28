/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'

import path from "path"

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
export default defineConfig({
  plugins: [
    react(),
    viteTsConfigPaths({
      root: './',
    }),
  ],
  resolve: {
    alias: {
      "next/original-image": require.resolve('next/image'),
      "next/image": path.resolve(__dirname, "./.ladle/UnoptimizedImage.tsx"),
    },
  },
  define: {
    "process.env": process.env,
  },
  test: {
    globals: true,
    cache: {
      dir: './node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  }
})
