import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import SnackComponents from '@snack/ui'
import SnackComponents from '../../../packages/ui/src'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(SnackComponents)
app.mount('#app')
