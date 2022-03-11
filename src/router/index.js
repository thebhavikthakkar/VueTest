import Vue from 'vue'
import VueRouter from 'vue-router'
import PeopleEdit from '../components/PeopleEdit'
import PeopleList from '../components/PeopleList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: PeopleList
  },
  {
    path: '/edit/:username',
    component: PeopleEdit
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
