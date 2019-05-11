import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//路由组件
import Home from '@/pages/Home/Home.vue';
import Order from '@/pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Search from '../pages/Search/Search.vue';
import Login from '../pages/Login/Login.vue';
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      meta: {
        /**
         * 元数据，可以通过$route获取
         */
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        /**
         * 元数据，可以通过$route获取
         */
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        /**
         * 元数据，可以通过$route获取
         */
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        /**
         * 元数据，可以通过$route获取
         */
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/home'
    },

  ]
})
