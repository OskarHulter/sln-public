/// <reference types="vitest" />
import { resolve } from 'path' //join
import { defineConfig } from 'vite'
// import dts from 'vite-plugin-dts'
import viteTsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    // dts({
    //   tsConfigFilePath: join(__dirname, 'tsconfig.lib.json'),
    //   // Faster builds by skipping tests. Set this to false to enable type checking.
    //   skipDiagnostics: false,
    // }),

    viteTsConfigPaths({
      root: '../../../',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../../',
  //    }),
  //  ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'data-access-shared',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forgot to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['z', 'next', 'zod', 'react', 'superjson'],
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
})
