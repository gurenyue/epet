<template>
  <div id="epet">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="footer" v-show="isShow">
      <div class="footer-item main">
        <router-link to="/main" ></router-link>
      </div>
      <div class="footer-item category">
        <router-link to="/category"></router-link>
      </div>
      <div class="footer-item cart">
      <router-link to="/cart"></router-link>
      </div>
      <div class="footer-item user" @click="toggleShow" >
      <router-link  :toggleShow="toggleShow" to="/logining"  ></router-link>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
  data(){
    return{
      isShow:true
    }
  },
  methods:{
    toggleShow(){
//        this.isShow =false
    },
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #epet
    width 100%
    height 100%
    overflow hidden
    font-size 14px
    .footer
      border-top: 1px solid #e7e7e7;
      height 45px
      width: 100%
      position fixed
      z-index 100
      bottom 0
      background-color white
      .footer-item
        width 25%
        float left
        line-height 45px
        &>a
          /*width 100%*/
          display block
          font-size 14px
          margin: 0 auto;
          height: 40px;
          width: 42px;
          background  url("./assets/imgs/icon.png") no-repeat
          background-size 234px 163px;
      .main
        &>a
          background-position  -82px 0
          &.active
              background-position  0 0
      .category
        &>a
          background-position  -82px -40px
          &.active
            background-position  0 -40px
      .cart
        &>a
          background-position  -82px -80px
          &.active
            background-position  0 -80px
      .user
        &>a
          background-position  -82px -122px
          &.active
            background-position  0 -122px

</style>
