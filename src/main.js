import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'


const app = createApp(App) 
app.use(store).use(router).use(ElementPlus).use(ElementPlusIconsVue).mount('#app')

app.directive('hoverBlue',{
    mounted(el) {
        el.addEventListener("mouseover", () => {
          el.style.color = "#409eff";
        });
        el.addEventListener("mouseout", () => {
          el.style.color = "black";
        });
      }
})