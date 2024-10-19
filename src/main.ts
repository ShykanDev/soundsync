import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/index.css'
// Firestore
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZIdkHDMsnHWHrJcZlbQga7J5SHjJHAWU",
  authDomain: "soundsync-d01.firebaseapp.com",
  projectId: "soundsync-d01",
  storageBucket: "soundsync-d01.appspot.com",
  messagingSenderId: "978962934337",
  appId: "1:978962934337:web:4011c1b9a7444d433c74c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
