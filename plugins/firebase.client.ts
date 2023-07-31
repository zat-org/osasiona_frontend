import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'


export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig()

  const firebaseConfig: any = {
    apiKey: runtimeConfig.public.firebaseApiKey,
    authDomain: runtimeConfig.public.firebaseAuthDomain,
    projectId: runtimeConfig.public.firebaseProjectId,
    storageBucket: runtimeConfig.public.firebaseStorageBucket,
    messagingSenderId: runtimeConfig.public.firebaseMessagingSenderId,
    appId: runtimeConfig.public.firebaseAppId,
  };


  const app = initializeApp(firebaseConfig)
  const firestore = getFirestore(app)
  nuxtApp.vueApp.provide('firestore', firestore)
  nuxtApp.provide('firestore', firestore)

})

