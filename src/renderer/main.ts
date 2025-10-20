import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import NaiveUI from 'naive-ui'
const app = createApp(App)
const pinia = createPinia()
app.use(NaiveUI).use(router).use(pinia).mount('#app')

