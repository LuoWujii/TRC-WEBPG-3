import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Ripple from 'vue-ripple-directive'
import VueRippler from 'vue-rippler'
import './assets/tailwind.css'

createApp(App).use(VueRippler).use(router).mount('#app')
