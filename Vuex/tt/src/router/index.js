import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
