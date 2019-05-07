import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import selectDemo from '@/views/select-demo'
import vueComponent from '@/views/vue-component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/select-demo',
      name: 'selectDemo',
      component: selectDemo
    },
    {
      path: '/vue-component',
      name: 'component',
      component: vueComponent
    }
  ]
})
