<template>
  <div class="register">

    <div class="registerWrapper" v-show="isfirst">
      <div class="reg">
        <span class="s1"></span>
        <input  type="text" placeholder="手机号/邮箱/用户名" v-model="phone">
      </div>
      <div class="button" @click="next" :class="{active:isOn}">下一步</div>
    </div>
    <div class="next" v-show="isNext">
      <ul class="inputnumber">
        <li>
          <span class="s3"></span>
          <input  type="text" v-model="phone" placeholder="请输入手机号或邮箱" >
        </li>
        <li>
          <span class="s2"></span>
          <input type="text" placeholder="图片验证">
          <a><img src="./seccode.png" alt=""></a>
        </li>
        <li>
          <span class="s2"></span>
          <input type="text" placeholder="验证码" v-model="code">
          <span class="right" @click="sendCode">获取动态密码</span>
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
      <div class="button active" @click="login">下一步</div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default{
    data(){
      return {
        isfirst:true,
        isNext:false,
        phone:'',
        number:'',
        code:''
      }
    },

    methods:{

//发送验证码
      sendCode () {
        Toast({
            message: '发送验证码成功',
            iconClass: 'icon icon-success'
          })

//        const url = `/sendcode?phone=${this.phone}`
//        axios.get(url).then(response => {
////          alert(response.data.code) // 0
//          Toast({
//            message: '发送验证码成功',
//            iconClass: 'icon icon-success'
//          })
//        })
      },

      //注册
      login() {

        Toast( '注册成功，已经登录')

//        axios.post('/login', {phone: this.phone, code: this.code}).then(response => {
//          console.log('login result ', response.data)
//          const result = response.data
//          if (result.code == 0) {
//            const user = result.data
//             this.$store.dispatch('getUser',user)
//            alert(`登陆成功: ${user.phone}`)
//        Toast({
//          message: '注册成功，已经登录',
//          iconClass: 'icon icon-success'
//        })
//          } else {
//            alert(`登陆失败, 请输入正确的手机号和验证码`)
//        Toast( '登陆失败, 请输入正确的手机号和验证码')
//          }
//        })


        this.$router.push('/main')

      },

      register(){
        this.isRegister=!this.isRegister
        this.init=false
      },
      next(){
        this.isNext=true
        this.isfirst=false
        console.log('出发了吗');
      },
    },
    computed:{
      isOn(){
        var val=this.phone
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
    .register
      width 100%
      height 100%
      /*background-color #7e8c8d*/
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
            color: #000000;
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
              color: #333333;
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
              bottom 4px


        .button
          margin 30px
          text-align center
          color: #fff
          padding 10px auto
          border-radius 10px
          font-size 15px
          line-height 30px
          &.active
            background-color red
</style>
