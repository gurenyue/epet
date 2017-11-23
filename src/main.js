import Vue from 'vue'
import { Swipe, SwipeItem ,Navbar, TabItem,TabContainer, TabContainerItem } from 'mint-ui';
import VueScroller from 'vue-scroller'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import loading from './assets/imgs/loading.gif'
// 引入控制地址的选择插件
import Distpicker from 'v-distpicker'
// 引入图标库
import './assets/stylus/fonts.styl'

Vue.use(VueScroller)

// 声明使用 轮播
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 声明使用 导航
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
// 声明使用 面板
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
// 内部会自定义一个全局指令 lazy来实现图片懒加载
Vue.use(VueLazyload, {
  loading
})

// 声明使用地址选择插件
Vue.component('v-distpicker', Distpicker)






new Vue({
  el: '#app',
  render:h=>h(App),
  router

})
