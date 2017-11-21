// 引入vue和vuerouter
import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用Vue-router
Vue.use(VueRouter);
// 引入模块
import main from '../pages/main/main.vue'
import cart from '../pages/cart/cart.vue'
import category from '../pages/category/category.vue'
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
      component: category
    },
    {
      path:'/cart',
      component: cart
    },
    {
      path:'/login',
      component: login
    },
    {
      path:'/register',
      component: register
    }
  ]
})
