// packages/ui-shared/vite.config.ts
import dts from "file:///C:/Users/Stresslessness/programming/blog-projects/sln-public/node_modules/.pnpm/vite-plugin-dts@1.7.1_vite@4.0.4/node_modules/vite-plugin-dts/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/Stresslessness/programming/blog-projects/sln-public/node_modules/.pnpm/vite@4.0.4_ln3zd37likqum747dljlxbzdm4/node_modules/vite/dist/node/index.js";
import viteTsConfigPaths from "file:///C:/Users/Stresslessness/programming/blog-projects/sln-public/node_modules/.pnpm/vite-tsconfig-paths@4.0.3_45r5jtpbadiqhtapcm7niis3va/node_modules/vite-tsconfig-paths/dist/index.mjs";
import react from "file:///C:/Users/Stresslessness/programming/blog-projects/sln-public/node_modules/.pnpm/@vitejs+plugin-react@3.0.1_vite@4.0.4/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { join } from "path";
var __vite_injected_original_dirname = "C:\\Users\\Stresslessness\\programming\\blog-projects\\sln-public\\packages\\ui-shared";
var vite_config_default = defineConfig({
  plugins: [
    dts({
      tsConfigFilePath: join(__vite_injected_original_dirname, "tsconfig.lib.json"),
      // Faster builds by skipping tests. Set this to false to enable type checking.
      skipDiagnostics: true
    }),
    react(),
    viteTsConfigPaths({
      root: "../../"
    })
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: "src/index.ts",
      name: "ui-shared",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forgot to update your package.json as well.
      formats: ["es", "cjs", "umd"]
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ["react", "react-dom", "react/jsx-runtime", "zod", "superjson", "axios", "next"]
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
    cache: {
      dir: "../../node_modules/.vitest"
    },
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZXMvdWktc2hhcmVkL3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcU3RyZXNzbGVzc25lc3NcXFxccHJvZ3JhbW1pbmdcXFxcYmxvZy1wcm9qZWN0c1xcXFxzbG4tcHVibGljXFxcXHBhY2thZ2VzXFxcXHVpLXNoYXJlZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcU3RyZXNzbGVzc25lc3NcXFxccHJvZ3JhbW1pbmdcXFxcYmxvZy1wcm9qZWN0c1xcXFxzbG4tcHVibGljXFxcXHBhY2thZ2VzXFxcXHVpLXNoYXJlZFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvU3RyZXNzbGVzc25lc3MvcHJvZ3JhbW1pbmcvYmxvZy1wcm9qZWN0cy9zbG4tcHVibGljL3BhY2thZ2VzL3VpLXNoYXJlZC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2aXRlVHNDb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgam9pbiB9IGZyb20gJ3BhdGgnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBkdHMoe1xuICAgICAgdHNDb25maWdGaWxlUGF0aDogam9pbihfX2Rpcm5hbWUsICd0c2NvbmZpZy5saWIuanNvbicpLFxuICAgICAgLy8gRmFzdGVyIGJ1aWxkcyBieSBza2lwcGluZyB0ZXN0cy4gU2V0IHRoaXMgdG8gZmFsc2UgdG8gZW5hYmxlIHR5cGUgY2hlY2tpbmcuXG4gICAgICBza2lwRGlhZ25vc3RpY3M6IHRydWUsXG4gICAgfSksXG4gICAgcmVhY3QoKSxcbiAgICB2aXRlVHNDb25maWdQYXRocyh7XG4gICAgICByb290OiAnLi4vLi4vJyxcbiAgICB9KSxcbiAgXSxcblxuICAvLyBVbmNvbW1lbnQgdGhpcyBpZiB5b3UgYXJlIHVzaW5nIHdvcmtlcnMuXG4gIC8vIHdvcmtlcjoge1xuICAvLyAgcGx1Z2luczogW1xuICAvLyAgICB2aXRlVHNDb25maWdQYXRocyh7XG4gIC8vICAgICAgcm9vdDogJy4uLy4uLycsXG4gIC8vICAgIH0pLFxuICAvLyAgXSxcbiAgLy8gfSxcblxuICAvLyBDb25maWd1cmF0aW9uIGZvciBidWlsZGluZyB5b3VyIGxpYnJhcnkuXG4gIC8vIFNlZTogaHR0cHM6Ly92aXRlanMuZGV2L2d1aWRlL2J1aWxkLmh0bWwjbGlicmFyeS1tb2RlXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICAvLyBDb3VsZCBhbHNvIGJlIGEgZGljdGlvbmFyeSBvciBhcnJheSBvZiBtdWx0aXBsZSBlbnRyeSBwb2ludHMuXG4gICAgICBlbnRyeTogJ3NyYy9pbmRleC50cycsXG4gICAgICBuYW1lOiAndWktc2hhcmVkJyxcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxuICAgICAgLy8gQ2hhbmdlIHRoaXMgdG8gdGhlIGZvcm1hdHMgeW91IHdhbnQgdG8gc3VwcG9ydC5cbiAgICAgIC8vIERvbid0IGZvcmdvdCB0byB1cGRhdGUgeW91ciBwYWNrYWdlLmpzb24gYXMgd2VsbC5cbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAnY2pzJywgJ3VtZCddLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gRXh0ZXJuYWwgcGFja2FnZXMgdGhhdCBzaG91bGQgbm90IGJlIGJ1bmRsZWQgaW50byB5b3VyIGxpYnJhcnkuXG4gICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3QvanN4LXJ1bnRpbWUnLCAnem9kJywgJ3N1cGVyanNvbicsICdheGlvcycsICduZXh0J10sXG5cbiAgICB9LFxuICB9LFxuXG4gIHRlc3Q6IHtcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIHNldHVwRmlsZXM6ICcuL3Rlc3RzL3NldHVwLmpzJyxcbiAgICBjYWNoZToge1xuICAgICAgZGlyOiAnLi4vLi4vbm9kZV9tb2R1bGVzLy52aXRlc3QnLFxuICAgIH0sXG4gICAgaW5jbHVkZTogWydzcmMvKiovKi57dGVzdCxzcGVjfS57anMsbWpzLGNqcyx0cyxtdHMsY3RzLGpzeCx0c3h9J10sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErYSxPQUFPLFNBQVM7QUFDL2IsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsWUFBWTtBQUpyQixJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixrQkFBa0IsS0FBSyxrQ0FBVyxtQkFBbUI7QUFBQTtBQUFBLE1BRXJELGlCQUFpQjtBQUFBLElBQ25CLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxJQUNOLGtCQUFrQjtBQUFBLE1BQ2hCLE1BQU07QUFBQSxJQUNSLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQWFBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQTtBQUFBLE1BRUgsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBO0FBQUE7QUFBQSxNQUdWLFNBQVMsQ0FBQyxNQUFNLE9BQU8sS0FBSztBQUFBLElBQzlCO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxTQUFTLGFBQWEscUJBQXFCLE9BQU8sYUFBYSxTQUFTLE1BQU07QUFBQSxJQUUzRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLE1BQU07QUFBQSxJQUNKLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxJQUNaLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxTQUFTLENBQUMsc0RBQXNEO0FBQUEsRUFDbEU7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
