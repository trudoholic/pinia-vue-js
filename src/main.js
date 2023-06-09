import 'nes.css/css/nes.min.css'
import '@fontsource/press-start-2p/400.css'
import './assets/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')