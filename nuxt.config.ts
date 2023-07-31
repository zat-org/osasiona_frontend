// https://nuxt.com/docs/api/configuration/nuxt-config
const Title = "اوساسيونا"
const Description = ""
const Keywords = ""
const LogoURL = "https://firebasestorage.googleapis.com/v0/b/players-photos.appspot.com/o/channelsLogos%2Fosasiona_dark.webp?alt=media&token=8b8e3c68-b331-44de-911d-220cc647c09d"
const WebsiteUrl = "https://osasyona.com/"

export default defineNuxtConfig({
    app: {
        head: {
            title: Title,
            meta: [{ hid: 'description', name: 'description', content: Description }
                , { hid: 'keywords', name: 'keywords', content: Keywords }
                , { name: 'og:title', content: Title }
                , { name: 'og:description', content: Description }
                , { name: 'og:image', content: LogoURL }
                , { name: 'og:url', content: WebsiteUrl }
                , { "name": "viewport", "content": "width=device-width, initial-scale=1" }
                , { "charset": "utf-8" }],
            noscript: [{ children: 'JavaScript is required' }],
        }
    },
    css: ["@/node_modules/@fortawesome/fontawesome-free/css/all.min.css"],
    modules: ['@nuxtjs/tailwindcss', '@tailvue/nuxt'],
    tailwindcss: {
        configPath: 'tailwind.config.js',
    }
})
