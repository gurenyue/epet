<template>
  <div class="login">
    <div class="logining" v-if="username">
       <div class="user">
         <img src="./center.jpg" alt="">
         <div class="namestyle">
           <span>{{username}}</span>
         </div>
       </div>
       <div class="center">
         <ul class="list">
           <li>
             <a href="#">
               <span><img src="./icon2.png" alt=""></span>
               <span>待付款</span>
             </a>
           </li>
           <li>
             <a href="#">
               <span><img src="./icon2.png" alt=""></span>
               <span>待收货</span>
             </a>
           </li>
           <li>
             <a href="#">
               <span><img src="./icon2.png" alt=""></span>
               <span>待评价</span>
             </a>
           </li>
           <li>
             <a href="#">
               <span><img src="./icon2.png" alt=""></span>
               <span>所有订单</span>
             </a>
           </li>
           <li>
             <a href="#">
               <span><img src="./icon2.png" alt=""></span>
               <span>优惠券</span>
             </a>
           </li>
           <li>
             <a href="#">
               <span><img src="./icon2.png" alt=""></span>
               <span>E宠币</span>
             </a>
           </li>
           <li>
             <a href="#">
               <span><img src="./icon2.png" alt=""></span>
               <span>余额</span>
             </a>
           </li>
           <li>
             <a href="#">
               <span><img src="./icon2.png" alt=""></span>
               <span>我的钱包</span>
             </a>
           </li>
         </ul>
       </div>
        <div class="out" @click="out">退出</div>
    </div>
    <div class="loginWrapper" v-else>
      <div class="image-header">
        <div class="title">
          <div class="back" @click="change">
            <i class="icon-arrow_lift"></i>
          </div>
          <!--<span @click="register">注册</span>-->
          <router-link to="/register">注册</router-link>
        </div>
        <div class="logo">
          <img src="./logo.png" alt="">
        </div>
        <div class="sport">
          <div class="loginit" @click="common">普通登录</div>
          <div class="activelogin" @click="loginActive">手机动态密码登录</div>
        </div>
      </div>
      <div class="main01 main" v-show="isLogin">
        <i></i>
        <ul class="login01">
          <li>
            <span class="s1"></span>
            <input  type="text" placeholder="手机号/邮箱/用户名" v-model="number">
          </li>
          <li>
            <span class="s2"></span>
            <input type="text" placeholder="输入密码" v-model="password">
          </li>
        </ul>
        <div class="forget">
          <a href="">忘记密码?</a>
        </div>
        <div class="loginbutton">
          <a @click.stop="passwordLogin">登录</a>
        </div>
      </div>
      <div class="main02 main" v-show="isActive">
        <i></i>
        <ul class="login01">
          <li>
            <span class="s1"></span>
            <input  type="text" placeholder="输入手机号" v-model="number">
          </li>
          <li>
            <span class="s2"></span>
            <input type="text" placeholder="输入图片内容">
            <a>
              <!--<img src="./seccode.png" alt="" v-show="!imgbase64" >-->
              <img src="/captlogin" @click="update">
            </a>
          </li>
          <li>
            <span class="s2"></span>
            <input type="text" placeholder="动态密码" v-model="code">
            <span class="right" @click="sendCode">获取动态密码</span>
          </li>
        </ul>
        <div class="forget">
          <a href="">忘记密码?</a>
        </div>
        <div class="loginbutton">
          <a @click="changeLogin">登录2</a>
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
  </div>
</template>
<script>
  import axios from 'axios'
  import {mapState} from 'vuex'
  import {Toast} from 'mint-ui'
  export default{
    data(){
      return {
        isActive:false,
        isLogin:true,
        username:'',
        number: '',
        password: '',
        code: '',
        imgbase64:''
      }
    },
    mounted(){
      const user =JSON.parse(localStorage.getItem('user')||'{}')
      if(user){
      this.username =user.username
     }


     },
    methods:{
      change(){
        this.$router.push('/main')
//        this.$router.replace('/main')
//        this.$router.go(-1)
//        this.$router.back()
      },
//      当一般登陆时
      common(){
         this.isActive = false
         this.isLogin = true
      },
//      动态验证码登录时
      loginActive(){
        this.isActive = true
        this.isLogin = false
      },
//      退出登录
      out(){
        localStorage.removeItem('user')
        Toast('已退出')
        this.username = ''
      },
//      密码验证
      passwordLogin(){
        console.log('登录');
        axios.post('/login', {number: this.number, password: this.password}).then(response => {
          const result = response.data
          if (result.code == 0) {
            const user = result.data
            Toast(`登陆成功: ${user.phone}`)
            this.username = user.username
            console.log(this.username);
            this.password=''
          } else if(result.code == 2) {
            Toast('登陆失败，用户不存在')
          }else if(result.code == 3) {
            Toast('登陆失败，密码错误')
          }
        })
      },
      //发送短信验证码
      sendCode () {
        const url = `/sendcode?phone=${this.number}`
        axios.get(url).then(response => {
          Toast({
            message: '发送验证码成功',
            iconClass: 'icon icon-success'
          })
        })
      },
      //  动态验证码验证
      changeLogin(){
        console.log('动态验证码登录');
        axios.post('/activeLogin', {phone: this.number, code: this.code}).then(response => {
          const result = response.data
          if (result.code == 0) {
            const user = result.data
            Toast(`登陆成功: ${user.phone}`)
//            更新username
            this.username = user.username
            console.log(this.username);
//            储存在内存中
            localStorage.setItem( 'user', JSON.stringify(user))
            this.password=''
          } else if(result.code ==2) {
            Toast('登陆失败，用户不存在')
          }else if(result.code == 1) {
            Toast('登陆失败，验证码错误')
          }
        })
      },
//       发送图片验证
//      getCaptcha(){
//        const url = `/captlogin`
//        axios.get(url).then(response => {
//          Toast({
//            message: '发送验证码成功',
//            iconClass: 'icon icon-success'
//          })
//         var  result = response.data
//          console.log(result);
//          this.imgbase64 = result
//        })
//      }
      update(event){
        event.target.src="/captlogin?"+Date.now();
      }
    },
    computed:{
      ...mapState(['user']),
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
  .logining
    width 100%
    height 100%
    color white
    .user
      height 167px
      background-image url("./dog.jpg")
      background-size 100% 100%
      padding 15px
      box-sizing border-box
      text-align center
      line-height 30px
      &>img
        width: 70px
        height 70px
        box-sizing border-box
        border-radius 50%
        border 5px solid #ebebeb
        float left
      .namestyle
        float left
        margin 10px
    .center
      width 100%
      height 176px
      .list
        height 100%
        font-size 14px
        &>li
          width:25%
          height 50%
          float left
          border-bottom: 1px solid #e5e5e5;
          box-sizing border-box
          position relative
          padding-top 15px
          padding-bottom 10px
          &>a
            height 100%
            box-sizing border-box
            display flex
            flex-direction: column
            align-items center
            justify-content space-between
            &>span
              height 50%
              text-align center
              margin-top 5px
              &>img
                display block
                width: 27px;
                height: 25px;
    .out
      width 95%
      margin 0 auto
      margin-top 30px
      height 40px
      color #ffffff
      background-color red
      font-size 20px
      text-align center
      line-height 40px
      border-radius 10px

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
         &>a
           float: right
           font-size 16px
           display block
           color white
           margin: 20px 10px 0
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

     .main
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
         margin: auto;
       &>ul
         width 100%
         &>li
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
           &>span
             float: left;
             display: inline;
             width: 17px;
             height: 21px;
             background-size: contain;
             margin: 1px 0 0 -25px;
             &.s1
               background: url(./ico3.png) no-repeat;
               background-size: contain;
             &.s2
               background: url(./ico4.png) no-repeat;
               background-size: contain;
             &.s3
               background: url(./ico1.png) no-repeat;
               background-size: contain;
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
       &.main01
         &>i
           top: -10px;
           left: -205px;
           right: 0;
         &>ul
           height 90px
           &>li
             height 50%
       &.main02
         &>i
           top: -11px;
           left: 255px;
         &>ul
           height 137px
           &>li
             height 33.3%
             .right
               width 100px
               font-size 12px
               color red
               float: right
               position absolute
               border 1px solid red
               right 5px
               bottom 6px
               padding 5px
               text-align center
               line-height 20px
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
</style>
