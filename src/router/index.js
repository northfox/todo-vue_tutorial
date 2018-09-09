import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import Hoge from '@/components/Hoge'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/hoge',
      name: 'Hoge',
      component: Hoge
    }
  ]
})
