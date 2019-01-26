import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Theater from '@/components/Theater'
import ComingSoon from '@/components/ComingSoon'
import NowShowing from '@/components/NowShowing'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/theater',
      name: 'Theater',
      component: Theater
    },
    {
      path: '/comingsoon',
      name: 'ComingSoon',
      component: ComingSoon
    },
    {
      path: '/nowshowing',
      name: 'NowShowing',
      component: NowShowing
    }
  ]
})
