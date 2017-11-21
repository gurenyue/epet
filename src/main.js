import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import VueScroller from 'vue-scroller'
import App from './App.vue'
import router from './router'
Vue.use(VueScroller)
// 声明使用
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 引入图标库
import './assets/stylus/fonts.styl'

new Vue({
  el: '#app',
  render:h=>h(App),
  router

})
