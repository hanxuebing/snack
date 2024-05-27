import './assets/main.css'
import 'element-plus/theme-chalk/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Bundle from '@snack/vue3lib'
import SnackComponents from '@snack/ui'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Bundle)
app.use(SnackComponents)
app.mount('#app')
