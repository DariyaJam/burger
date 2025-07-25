import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
/*export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})*/

export default defineConfig(({ mode }) => {
  const config = {
    plugins: [
      vue(),
      vueJsx(),
      vueDevTools()
    ],
    server: {
      host: 'burger.dev',
      https: true,
      open: true,       // открывать браузер автоматически
      port: 443,
      cors: {
        origin: "*",
        methods: "GET,POST,HEAD,PUT,PATCH,POST,DELETE",
        preflightContinue: true,
        optionsSuccessStatus: 204

      },
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
  config.plugins.push(mkcert());
  return config
})