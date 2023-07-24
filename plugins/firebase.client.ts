import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'


export default defineNuxtPlugin(nuxtApp => {
  const firebaseConfig = {
    apiKey: "AIzaSyDgsa29WM-ZmThITRj2X1ROpFheva-0F5w",
    authDomain: "players-photos.firebaseapp.com",
    projectId: "players-photos",
    storageBucket: "players-photos.appspot.com",
    messagingSenderId: "892416100729",
    appId: "1:892416100729:web:4d816ea75c6b07ac3547a8",
  };


  const app = initializeApp(firebaseConfig)
  const firestore = getFirestore(app)
  nuxtApp.vueApp.provide('firestore', firestore)
  nuxtApp.provide('firestore', firestore)

})

