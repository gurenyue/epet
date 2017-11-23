<template>
  <div class="login">
    <div class="loginWrapper" v-show="init">
      <div class="image-header">
        <div class="title">
          <div class="back" @click="change">
            <i class="icon-arrow_lift"></i>
          </div>
          <span @click="register">注册</span>
        </div>
        <div class="logo">
          <img src="./logo.png" alt="">
        </div>
        <div class="sport">
          <div class="loginit" @click="login">普通登录</div>
          <div class="activelogin" @click="loginActive">手机动态密码登录</div>
        </div>
      </div>
      <div class="main01" v-show="isLogin">
        <i></i>
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
      <div class="main02" v-show="isActive">
        <i></i>
        <ul class="login01">
          <li>
            <span class="s1"></span>
            <input  type="text" placeholder="输入手机号">
          </li>
          <li>
            <span class="s2"></span>
            <input type="text" placeholder="输入图片内容">
            <a><img src="./seccode.png" alt=""></a>
          </li>
          <li>
          <span class="s2"></span>
          <input type="text" placeholder="动态密码">
          <span class="right">获取动态密码</span>
        </li>
        </ul>
        <div class="forget">
          <a href="">忘记密码?</a>
        </div>
        <div class="loginbutton">
          <a href="#">登录2</a>
        </div>
      </div>
      <div class="text">合作网站登录</div>
      <div class="otherLogin">
        <a href="">
          <img src="./login_ico2.png" alt="">
        </a>
        <a href="">
          <img src="./login_ico4.png" alt="">
        </a>
      </div>
    </div>
    <div class="registerWrapper" v-show="isRegister">
      <div class="reg">
        <span class="s1"></span>
        <input  type="text" placeholder="手机号/邮箱/用户名" v-model="input">
      </div>
      <div class="button" @click="next" :class="{active:isOn}">下一步</div>
    </div>
    <div class="next" v-show="isNext">
        <ul class="inputnumber">
          <li>
            <span class="s1"></span>
            <input  type="text" placeholder="1830301623">
          </li>
          <li>
            <span class="s2"></span>
            <input type="text" placeholder="图片验证">
            <a><img src="./seccode.png" alt=""></a>
          </li>
          <li>
            <span class="s2"></span>
            <input type="text" placeholder="验证码">
            <span class="right">获取动态密码</span>
          </li>
          <li>
            <span class="s2"></span>
            <input type="text" placeholder="你的用户/昵称">
          </li>
          <li>
            <span class="s2"></span>
            <input type="text" placeholder="设置密码">
          </li>
          <li>
            <span class="s2"></span>
            <input type="text" placeholder="确认密码">
          </li>
        </ul>
        <div class="button active" @click="next">下一步</div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        isActive:false,
        isLogin:true,
        isRegister:false,
        isNext:false,
        init:true,
        input:''
      }
    },
    methods:{
      change(){
        this.$router.back()
        this.$emit('loginback')
      },
      login(){
         this.isActive = false
         this.isLogin = true
      },
      loginActive(){
        this.isActive = true
        this.isLogin = false
      },
      register(){
        this.isRegister=!this.isRegister
        this.init=false
      },
      next(){
        this.isNext=true
        this.isRegister=false
      },
      ring(){
        var las=this.$refs.numbers
      }
    },
    computed:{
      isOn(){
        var val=this.input
        if(val){
          return true
        }else {
          return false
        }

      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.login
  width 100%
  height 100%
  .loginWrapper
     width 100%
     height 600px
     .image-header
       color: #fff
       background-image url("./login-bg.png")
       background-size 100% 100%
       width 100%
       height 170px
       .title
         height 50px
         .back
           position: absolute
           top: 16px
           left: 0
           width 22px
           height 20px
           .icon-arrow_lift
             width 20px
             display: block
             padding: 10px
             font-size: 16px
             color: #fff
         &>span
           float: right
           font-size 16px
           display block
           color white
           margin: 20px 10px 0px
       .logo
         height 76px
         &>img
           width 20%
           margin 0 auto
           display block
       .sport
         height 44px
         background-color rgba(255,255,255,.3)
         &>div
           width 50%
           height 100%
           float left
           line-height 44px
           font-size 15px
           text-align center

     .main01
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

     .main02
       margin 0 15px
       padding 0 auto
       position relative
       &>i
         width: 0;
         height: 0;
         border-left: 10px solid transparent;
         border-right: 10px solid transparent;
         border-bottom: 10px solid #fff;
         position: absolute;
         top: -11px;
         left: 255px;
         margin: auto;
       &>ul
         height 137px
         width 100%
         &>li
           height 33.3%
           border-bottom: #e2e2e2 solid 1px;
           padding: 12px 0 12px 30px;
           position: relative;
           box-sizing border-box
           &>input
             /*display: block;*/
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
             background: url(./ico1.png) no-repeat;
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
           .right
             color red
             float: right
             position absolute
             border 1px solid red
             padding 10px
             right 5px
             bottom 5px
             font-size 12px
           &>a
             display block
             position absolute
             right: 5px
             bottom 5px
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

     .otherLogin
       height 60px
       &>a
         display inline-block
         padding 10px 30px
         &>img
           width 60px
           height 60px
     .text
       color #e2e2e2
       height 20px
       line-height 20px
       font-size 18px
       text-align center
       padding-top 100px
  .registerWrapper
     width 100%
     height 100%
     padding 30px 20px
     box-sizing border-box
     .reg
       height 50px
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
         background: url(./ico1.png) no-repeat;
         background-size: contain;
         margin: 1px 0 0 -25px;
     .button
       margin 30px
       text-align center
       background-color #d7d7d7
       color: #fff
       padding 10px auto
       border-radius 10px
       font-size 15px
       height 30px
       line-height 30px
       &.active
         background-color red
  .next
    width 100%
    height 600px
    .inputnumber
      height 276px
      padding 10px 20px
      box-sizing border-box
      font-size 12px
      &>li
        height 16.65%
        border-bottom: #e2e2e2 solid 1px;
        padding: 12px 0 12px 30px;
        position: relative;
        box-sizing border-box
        &>input
          /*display: block;*/
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
          height: 17px;
          background: url(./ico1.png) no-repeat;
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
        .right
          color red
          float: right
          position absolute
          border 1px solid red
          padding 10px
          right 5px
          bottom 5px
          font-size 12px
        &>a
          display block
          position absolute
          right: 5px
          bottom 0px
    .button
      margin 30px
      text-align center
      background-color #d7d7d7
      color: #fff
      padding 10px auto
      border-radius 10px
      font-size 15px
      height 30px
      line-height 30px
      &.active
        background-color red
</style>
