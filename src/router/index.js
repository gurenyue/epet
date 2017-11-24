// 引入vue和vuerouter
import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用Vue-router
Vue.use(VueRouter);
// 引入模块
import main from '../pages/main/main.vue'
import cart from '../pages/cart/cart.vue'
import category from '../pages/category/category.vue'
import tab1 from '../pages/category/tab1.vue'
import tab2 from '../pages/category/tab2.vue'
import login from '../pages/user/login.vue'
import register from '../pages/user/register.vue'
// 暴露
export default new VueRouter({
  linkActiveClass:'active',
  routes:[
    {
      path:'/',
      redirect :'/main'
    },
    {
      path:'/main',
      component: main
    },
    {
      path:'/category',
      component: category,
      children: [
        {
          path : '/category',
          redirect: '/category/tab1'
        },
        {
          path: 'tab1',
          component: tab1
        },
        {
          path: 'tab2',
          component: tab2
        },
      ]
    },
    {
      path:'/cart',
      component: cart
    },
    {
      path:'/logining',
      component: login
    },
    {
      path:'/register',
      component: register
    }
  ]
})
