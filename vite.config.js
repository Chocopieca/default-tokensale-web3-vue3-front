import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  return {
    base: "/default-tokensale-web3-vue3-front/",
    plugins: [vue()],
    build: {
      target: 'esnext' //browsers can handle the latest ES features
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "~~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    assetsInclude: ["**/*.png", "**/*.svg"],
  }
})
