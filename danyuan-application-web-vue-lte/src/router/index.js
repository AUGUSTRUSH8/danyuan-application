import Vue from 'vue'
import Router from 'vue-router'
import AddrIndex from '@/components/dbms/addrIndex'
import TypeIndex from '@/components/dbms/typeIndex'
import UserIndex from '@/components/dbms/userIndex'
import LoginIndex from '@/components/login/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/loginPath',
      name: 'loginIndex',
      component: LoginIndex
    },
    {
      path: '/addrIndexPath',
      name: 'addrIndex',
      component: AddrIndex
    }, {
      path: '/userIndexPath',
      name: 'userIndex',
      component: UserIndex
    }, {
      path: '/typeIndexPath',
      name: 'typeIndex',
      component: TypeIndex
    }
  ]
})
