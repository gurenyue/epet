import Vue from 'vue'
import { Swipe, SwipeItem ,Navbar, TabItem,TabContainer, TabContainerItem } from 'mint-ui';
import VueScroller from 'vue-scroller'
import App from './App.vue'
import router from './router'
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
// 引入图标库
import './assets/stylus/fonts.styl'

new Vue({
  el: '#app',
  render:h=>h(App),
  router

})
