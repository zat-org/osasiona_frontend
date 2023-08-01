// https://nuxt.com/docs/api/configuration/nuxt-config
const Title = "اوساسيونا"
const Description = "أوساسيونا مكان صنَّاع المحتوى، والمكان الذي يُمكِّنك من الانطلاقة للعالم الذي تريده."
const Keywords = ` صناعة المحتوى  , بلوت , كتابة المحتوى , سام ,أوساسيونا , صانع محتوى`
const LogoURL = "https://firebasestorage.googleapis.com/v0/b/players-photos.appspot.com/o/channelsLogos%2Fosasiona_dark.webp?alt=media&token=8b8e3c68-b331-44de-911d-220cc647c09d"
const WebsiteUrl = "https://osasyona.com/"

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            youtubeApi: process.env.YOUTUBE_API_KEY,
            firebaseApiKey: process.env.FIREBASE_API_KEY,
            firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
            firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
            firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
            firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
            firebaseAppId: process.env.FIREBASE_APP_ID,
        }
    },
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
