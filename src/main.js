import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  //ルーターを router/index.js からインポート
 
import './assets/main.css'  //CSS のインポート
 
const app = createApp(App)  //Vue のインスタンスを生成
 
app.use(router)  //Vue のインスタンスにルーターをインストールして有効化
 
app.mount('#app')
