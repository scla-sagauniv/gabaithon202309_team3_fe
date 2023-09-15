import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
 
// createRouter メソッドでルーターを生成
const router = createRouter({
  // History の実装方法を指定（history オプション）
  history: createWebHistory(import.meta.env.BASE_URL),
  // ルーティングの定義（routes オプション）
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sample',
      name: 'sample',
      component: () => import('../views/Sample.vue')
    },
    {
      path: '/Sky',
      name: 'Sky',
      component: () => import('../views/Sky.vue')
    }
  ]
})
 
//生成したルーターをデフォルトエクスポート
export default router