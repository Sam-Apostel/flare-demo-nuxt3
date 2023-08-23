// https://nuxt.com/docs/api/configuration/nuxt-config
import flareSourcemapUploader from '@flareapp/vite-plugin-sourcemap-uploader';

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  sourcemap: true,
  vite: {
    plugins: [
        flareSourcemapUploader({
          key: process.env.FLARE_KEY,
        }),
    ],
  },

  runtimeConfig: {
    public: {
      flareKey: process.env.FLARE_KEY
    }
  },

  modules: ['@nuxtjs/tailwindcss']
})