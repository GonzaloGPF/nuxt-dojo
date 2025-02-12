// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: 'Nuxt Dojo',
      meta: [
        { name: 'description', content: 'Everything abount Nuxt 3'}
      ],
      link: [
        { 
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Icons'
        }
      ]
    }
  }
})