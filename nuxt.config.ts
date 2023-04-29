// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [{ "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }],
            noscript: [{ children: 'JavaScript is required' }],
        }
    },
    css: ["@/node_modules/@fortawesome/fontawesome-free/css/all.min.css", "@/node_modules/bootstrap/dist/css/bootstrap.rtl.min.css", "@/assets/css/main.css"],
    modules: ['@nuxtjs/strapi'],
})
