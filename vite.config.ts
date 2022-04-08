import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const { resolve } = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(
      {
        template: {
          compilerOptions: {
            // treat all tags with a dash as custom elements
            isCustomElement: (tag) => tag.includes('nk-')
          }
        }
      }
    ), 
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //Build web component
  build: {
    lib: {
      entry: "",
      formats: ["es", "cjs"],
      // name: "vue-web-comp",
      fileName: (format) => {
        return (format === 'es' ? `nk-wc.js` : "nk-wc.cjs")
      }, 
    },
    rollupOptions: {
      input: {
        // common: resolve(__dirname, './src/build-wc/nk-common.ts'),
        // home: resolve(__dirname, './src/build-wc/nk-home.ts'),
        category: resolve(__dirname, './src/build-wc/nk-category.ts')
      },
      output: [
        {
          entryFileNames: ({ name: fileName }) => {
            return `nk-${fileName}.js`
          },
          format: 'module',
          dir: resolve(__dirname, 'dist'),
        },
      ],
    },
    sourcemap: false,
    target: "esnext",
    minify: true,
  }
})
