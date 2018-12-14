import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const demo2 = r => require.ensure([], () => r(require('@/components/demo2/demo2.vue')), 'demo2')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    }
  ]
})
