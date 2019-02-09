import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TheaterList from '@/components/TheaterList'
import ComingSoon from '@/components/ComingSoon'
import NowShowing from '@/components/NowShowing'
import Theater from '@/components/Theater'


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
      name: 'TheaterList',
      component: TheaterList,
    },
    {
      path: '/theater/:id',
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
