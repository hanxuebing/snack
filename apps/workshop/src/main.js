import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import snack from '@snack/ui'

const app = createApp(App).mount('#app')
app.use(snack)