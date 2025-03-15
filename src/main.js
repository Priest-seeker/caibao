
import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'element-plus/dist/index.css'
import '@/assets/styles/globals.css'
import 'animate.css';

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.mount('#app')
