import Vue from 'vue'
import '@/assets/css/mui.min.css'
import '@/assets/css/app.css'
import HelloWorld from '@/components/HelloWorld'
import card from '@/components/card'
import Router from 'vue-router'
import nav from '@/components/nav'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/card',
      name: 'card',
      component: card
    },
    {
      path: '/',
      name: 'nav',
      component: nav
    }
  ]
})
