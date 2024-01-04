import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Vue3Mask from '../../src'

const app = createApp(App)
app.use(Vue3Mask)
app.mount('#app')
