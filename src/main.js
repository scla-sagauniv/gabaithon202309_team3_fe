import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  //ルーターを router/index.js からインポート
import axios from 'axios';
 
import './assets/main.css'  //CSS のインポート
 
const app = createApp(App)  //Vue のインスタンスを生成

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000/'; 
 
app.use(router)  //Vue のインスタンスにルーターをインストールして有効化
 
app.mount('#app')
