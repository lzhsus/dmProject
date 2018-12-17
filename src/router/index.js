import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Xiqu from '@/pages/xiqu'
import qinzi from '@/pages/qinzi'
import tiyu from '@/pages/tiyu'
import yaogun from '@/pages/yaogun'
import wudao from '@/pages/wudao'
import loginDL from '@/pages/loginDL'
import loginZC from '@/pages/loginZC'
import mainMsg from '@/pages/mainMsg'
import caty from '../components/caty/caty'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/xiqu',
      name: 'xiqu',
      component: Xiqu
    },
    {
      path: '/qinzi',
      name: 'xiqu',
      component: qinzi
    },
    {
      path: '/tiyu',
      name: 'xiqu',
      component: tiyu
    },
    {
      path: '/yaogun',
      name: 'xiqu',
      component: yaogun
    },
    {
      path: '/wudao',
      name: 'xiqu',
      component: wudao
    },

    {
      path: '/lgdl',
      name: 'lgdl',
      component: loginDL
    },
    {
      path: '/lgzc',
      name: 'lgzc',
      component: loginZC
    },
    {
      path:'/main',
      name:'main',
      component:mainMsg
    },
    {
      path:'/caty',
      name:'caty',
      component:caty
    }
  ],
  mode: 'history',
})
