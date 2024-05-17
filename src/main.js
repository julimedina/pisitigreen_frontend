import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './assets/main.css'
import 'material-icons/iconfont/material-icons.css'

axios.defaults.baseURL = 'http://127.0.0.1:8010'
createApp(App).use(store).use(router).use(axios).use(createPinia).mount('#app')
