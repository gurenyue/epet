<template>
<div class="place">

  <div class="title">
    <span class="back" @click="back">
    </span>
    <div class="text">选择收货地区</div>
    <span class="center" @click="isShow=!isShow"></span>
  </div>
  <div class="hiden" v-show="isShow">
    <router-link to="/main" >
      <span class="icon1"></span>
      <p>首页</p>
    </router-link>
    <router-link to="/category">
      <span class="icon2"></span>
      <p>商品分类</p>
    </router-link>

    <router-link to="/cart">
      <span class="icon4" id="getCartNum"></span>
      <p>购物车</p>
    </router-link>
    <router-link to="/login"  >
      <span class="icon5"></span>
      <p>我的e宠</p>
    </router-link>
  </div>
    <div class="contentWrapper" ref="content">
        <div class="content" >
          <div class="animal">
            <span>猫猫站</span>
            <span class="on">狗狗站</span>
            <span>水族站</span>
          </div>
          <div class="header">
            当前默认地址 : {{province}}{{city}}{{area}}
          </div>
          <v-distpicker type="mobile" @province="onProvince" @city="onCity"
                        @area="onArea"       @selected="onSelected">
          </v-distpicker>
        </div>


    </div>

</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    data(){
      return {
        isBack:false,
        province:'北京市',
        city:'东城区',
        area:'',
        isShow :false
      }
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll(this.$refs.content,{
          click : true
        })
      })
    },
    methods:{
      back(){
          this.$emit('isBack')
      },
      onSelected(data) {

      },
      onProvince(data){
        console.log(data);
        this.province = data.value
        this.city = ''
        this.area = ''

      },
      onCity(data){
        this.city = data.value
      },
      onArea(data){
        this.area = data.value
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .place
      width 100%
      .title
        width 100%
        height 50px
        position: relative
        &>span
          display block
          position: absolute
          background url("../../assets/imgs/icon.png") no-repeat
          background-size: 234px 159px;
          height: 30px;
          width: 17px;
        .back
          /*width 100%*/
          margin-top: 15px;
          left: 10px;
          background-position: -195px 0
        .text
          text-align center
          width 90%
          height 50px
          line-height 50px
          font-size 18px
          margin 0 auto
        .center
          background-position: -217px 0;
          top: 10px;
          right: 10px;
      .hiden
        width 100%
        border-bottom: 1px solid #d7d7d7;
        overflow: hidden;
        padding: 10px 0;
        display flex
        transition all 2s
        &>a
          display block
          width 25%
          height 50px
          &>span
            display block
            background: url(../../assets/imgs/icon.png) no-repeat;
            background-size: 234px 163px;
            height: 25px;
            width: 25px;
            margin: 0 auto;
            &.icon1
              background-position -170px -6px
            &.icon2
              background-position -170px -48px
            &.icon4
              background-position -170px -91px
            &.icon5
              background-position -170px -133px
          &>p
            display block
            text-align center
            line-height 20px
      .contentWrapper
        width 100%
        height 600px
        .content
          width 100%
          /*margin-top 50px*/
          /*position relative*/
          .animal
            width 100%
            height 53px
            display flex
            justify-content space-around
            align-items center
            &>span
              display block
              text-align center
              width 98px
              height 33px
              line-height 33px
              background: #b9b9b9;
              color: #666;
              border-radius: 5px;
              font-size: 15px;
              &.on
                color #ffffff
                background-color red
          .header
            height 43px
            line-height 43px
            padding 0 10px
            box-sizing border-box
            background-color #ffe6d9
            /*position absolute*/
            /*top 50px*/
            width 100%
          .address
            color black
            .address-header
               display none
            .address-container
              &>ul
                &>li
                  height 20px
                  padding 10px
</style>
