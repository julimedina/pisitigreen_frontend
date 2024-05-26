import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import FeedView from '../views/FeedView.vue'
import SearchView from '../views/SearchView.vue'
import ProfileView from '../views/ProfileView.vue'
import FriendsView from '../views/FriendsView.vue'
import PostView from '../views/PostView.vue'
import TrendView from '../views/TrendView.vue'
import EditProfileView from '../views/EditProfileView.vue'
import NotificationsView from '../views/NotificationsView.vue'


const routes = [
  
  {
    path: '/Feed',
    name: 'FeedView',
    component: FeedView
  },



  {
    path: '/Search',
    name: 'SearchView',
    component: SearchView
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

  {
    path: '/Profile/:id',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/Notifications',
    name: 'NotificationsView',
    component: NotificationsView
  },
  {
    path: '/Profile/edit',
    name: 'EditProfileView',
    component: EditProfileView
  },
  {
    path: '/Profile/:id/friends',
    name: 'FriendsView',
    component: FriendsView
  },
  {
    path: '/:id',
    name: 'PostView',
    component: PostView
  },
  {
    path: '/Trends/:id',
    name: 'Trendview',
    component: TrendView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
