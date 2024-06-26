import './assets/main.css'
import 'element-plus/theme-chalk/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import SnackComponents from '@snack/ui'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(SnackComponents)
app.mount('#app')
