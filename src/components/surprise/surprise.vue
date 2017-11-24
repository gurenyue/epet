<template>
<div class="surprise">
  <div class="surprise_title">
      <div class="titleImg">
        <img src="./surprise.png" alt="">
      </div>
      <div class="promptText">距本场结束</div>
      <div class="promptTime">
        <span>09</span>:
        <span>30</span>:
        <span>20</span>
       </div>
      <div class="more">
        <a href="">
          <img src="./more.png" alt="">
        </a>
      </div>
  </div>
  <div class="surprise_pro" ref="surprise_pro">
    <ul class="proList">
      <li class="pro-item" v-for="(good,index) in main.goods" :key="index">
        <a href="">
          <div class="pro-image">
            <img :src="good.image" alt="">
          </div>
          <div class="red">{{good.sale_price}}</div>
          <div class="discount">{{good.little_price}}</div>
        </a>

      </li>
    </ul>
  </div>

</div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default{
    mounted(){
        if(!this.main.goods) {
          return
        }
        // 只有当有数据创建创建scroll对象
        this._initScroll()
    },
    methods:{
//      滚动方法
      _initScroll () {
        this.$nextTick(() => {
          // 异步创建BScroll对象
          new BScroll(this.$refs.surprise_pro, {
            click: true,
            scrollX: true,
            scrollY: false
          })
        })
      },

    },

    //    获取主页数据
    computed: {
      ...mapState(['main'])
    },
    watch: {
      main(newSeller, oldSeller) { // main更新了, main中有数据了
        this._initScroll() // 直接刷新当前路由
      }
    },

  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .surprise
    width:100%
    height 190px
    font-size 14px
    .surprise_title
      height 60px
      padding 10px
      box-sizing border-box
      display flex
      align-items flex-start
      justify-content space-between
      .titleImg
        width: 85px
        height 24px
        &>img
          display block
          width 100%
          height 100%
      .promptText
        width: 82px
        line-height 20px
        text-align center
      .promptTime
        width 82px
        height 20px
        line-height 20px
        display flex
        &>span
          width 20px
          text-align center
          display block
          border 1px solid silver
          margin 2px
      .more
        width 68px
        height 40px
        margin-top -10px
        &>a
          display block
          height 40px
          &>img
            width:100%
            height 100%
    .surprise_pro
      height 130px
      width 100%
      .proList
       display flex
       white-space nowrap
       float left
       &>li
         width: 100px
         height 100%
         margin-right 10px
         float: left
         &>a
           display block
           width 84px
           margin 0 8px
           .pro-image
             width 100%
             height 84px
             background-color red
             &>img
               display block
               width  84px
               height 84px
           .red
             height 22px
             line-height 22px
             text-align center
             margin-top 5px
             color red
           .discount
             height 20px
             line-height 20px
             text-align center

</style>
