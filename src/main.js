import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.config.errorHandler = (err) => {
    console.log(err)
  }

app.use(router).mount('#app');