// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    'nuxt-security',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    oidc: {
      server: '',
      clientId: '',
      clientSecret: '',
      scope: 'openid profile email',
      redirectUri: '',
      pkce: false,
    },
    sessionPassword: '',
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  security: {
    csrf: {
      enabled: true,
    },
  },
})
