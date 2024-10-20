import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/index.css'
// pinia
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
// oh vue icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill,MdKeyboardarrowleftRound } from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill,MdKeyboardarrowleftRound);

// Firestore
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
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
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};
//vue toast
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'; 

const appVue = createApp(App)
appVue.use(Vue3Toastify, {
  autoClose: 3000,
},)
appVue.use(router)
appVue.use(pinia)
pinia.use(piniaPluginPersistedstate)
appVue.component("v-icon", OhVueIcon)
appVue.mount('#app')
