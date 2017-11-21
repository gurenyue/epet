<template>
  <div id="epet">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="footer">
      <div class="footer-item main">
        <router-link to="/main"></router-link>
      </div>
      <div class="footer-item category">
        <router-link to="/category"></router-link>
      </div>
      <div class="footer-item cart">
      <router-link to="/cart"></router-link>
      </div>
      <div class="footer-item user">
      <router-link to="/login"></router-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #epet
    width 100%
    overflow hidden
    .footer
      border-top: 1px solid #e7e7e7;
      height 45px
      width: 100%
      position fixed
      z-index 10
      bottom 0
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
      .main
        &>a
          background: url('./assets/imgs/icon.png') no-repeat
          background-size 234px 163px;
      .category
        &>a
          background: url('./assets/imgs/icon.png')  -82px -40px  no-repeat
          background-size 234px 163px;
      .cart
        &>a
          background: url('./assets/imgs/icon.png')  -82px -80px no-repeat
          background-size 234px 163px;
      .user
        &>a
          background: url('./assets/imgs/icon.png')  -82px -122px no-repeat
          background-size 234px 163px;

</style>
