import { createWebHistory, createRouter } from 'vue-router'
import AppVue from '../App.vue'
import ConstructorPage from '@/pages/ConstructorPage.vue'
import OrderFeedPage from '@/pages/OrderFeedPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import ForgotPasswordPage from '@/pages/ForgotPasswordPage.vue'
import ResetPasswordPage from '@/pages/ResetPasswordPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'


const routes = [
  {
    path: '/',
    component: ConstructorPage
  },
  {
    path: '/feed',
    component: OrderFeedPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/register',
    component: RegisterPage
  },
  {
    path: '/forgot-password',
    component: ForgotPasswordPage
  },
  {
    path: '/reset-password',
    component: ResetPasswordPage
  },
  {
    path: '/profile',
    component: ProfilePage
  }
]

const routerConfig = createRouter({
  history: createWebHistory(),
  routes
})
export default routerConfig