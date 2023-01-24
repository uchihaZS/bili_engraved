import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'




createApp(App).use(store).use(router).use(ElementPlus).use(ElementPlusIconsVue).mount('#app')
