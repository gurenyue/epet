<template>
  <div class="register">
    <div class="main01" v-show="isLogin">
      <ul class="login01">
        <li>
          <span class="s1"></span>
          <input  type="text" placeholder="手机号/邮箱/用户名">
        </li>
        <li>
          <span class="s2"></span>
          <input type="text" placeholder="输入密码">
        </li>
      </ul>
      <div class="forget">
        <a href="">忘记密码?</a>
      </div>
      <div class="loginbutton">
        <a href="#">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{}
</script>


<style lang="stylus" rel="stylesheet/stylus">
.register
  width 100%
  height 100%
  background-color #cccccc
  .main01
    width 100%
    margin 0 15px
    padding 0 auto
    position relative
    &>i
      display: block;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #fff;
      position: absolute;
      top: -10px;
      left: -205px;
      right: 0;
      margin: auto;
    &>ul
      height 90px
      width 100%
      &>li
        height 50%
        border-bottom: #e2e2e2 solid 1px;
        padding: 12px 0 12px 30px;
        position: relative;
        box-sizing border-box
        &>input
          display: block;
          height: 21px;
          width: 100%;
          font-size: 15px;
          border: none;
          padding: 0;
          color: #e2e2e2;
          font-family: "Microsoft Yahei",tahoma,arial;
          outline: none;
          background-color: #fff
        .s1
          float: left;
          display: inline;
          width: 17px;
          height: 21px;
          background: url(./ico3.png) no-repeat;
          background-size: contain;
          margin: 1px 0 0 -25px;
        .s2
          background: url(./ico4.png) no-repeat;
          float: left;
          display: inline;
          width: 17px;
          height: 21px;
          background-size: contain;
          margin: 1px 0 0 -25px;
    .forget
      padding-left: 2em;
      padding-right: 2em;
      height 30px
      &>a
        margin-top 1em
        display block
        float: right
    .loginbutton
      padding-top 5px
      &>a
        height 20px
        display block
        letter-spacing: 5px;
        border-radius: 5px;
        background: #2ec975;
        font-size: 15px;
        padding: .6em 0;
        text-align: center;
        color: #fff

</style>
