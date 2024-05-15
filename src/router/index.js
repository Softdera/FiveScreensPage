import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ScreenOne from '../views/ScreenOne.vue'
import ScreenTwo  from '../views/ScreenTwo.vue'
import ScreenThree from '../views/ScreenThree.vue'
import ScreenFour from '../views/ScreenFour.vue'
import ScreenFive from '../views/ScreenFive.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ScreenOne',
    name: 'ScreenOne',
    component: ScreenOne
  },
  {
    path: '/ScreenTwo',
    name: 'ScreenTwo',
    component: ScreenTwo
  },
  {
    path: '/ScreenThree',
    name: 'ScreenThree',
    component: ScreenThree
  },
  {
    path: '/ScreenFour',
    name: 'ScreenFour',
    component: ScreenFour
  },
  {
    path: '/ScreenFive',
    name: 'ScreenFive',
    component: ScreenFive
  },
 
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
