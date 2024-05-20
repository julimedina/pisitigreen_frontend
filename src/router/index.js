import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import FeedView from '../views/FeedView.vue'
import MessagesView from '../views/MessagesView.vue'


const routes = [
  
  {
    path: '/Feed',
    name: 'Feed',
    component: FeedView
  },

  {
    path: '/Messages',
    name: 'Messages',
    component: MessagesView
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUpView
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginView
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
