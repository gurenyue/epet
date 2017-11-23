<template>
<div class="place">

  <div class="title">
    <span class="back" @click="back">
    </span>
    <div class="text">选择收货地区</div>
    <span class="center" ></span>
  </div>
  <scroller>
    <div class="content">
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
  </scroller>

</div>
</template>

<script>
  export default{
    data(){
      return {
        isBack:false,
        province:'北京市',
        city:'东城区',
        area:''
      }
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
      position relative
      .title
        width 100%
        height 50px
        position: absolute
        background-color white
        z-index 10
        .back
          /*width 100%*/
          display block
          position: absolute
          background url("../../assets/imgs/icon.png") no-repeat
          background-size: 234px 159px;
          height: 18px;
          width: 11px;
          background-position: -201px -10px;
          margin-top: 15px;
          left: 10px;
        .text
          text-align center
          width 90%
          height 50px
          line-height 50px
          font-size 18px
          margin 0 auto
        .center
          background-size: 234px 163px;
          height: 18px;
          width: 17px;
          background-position: -217px -10px;
          position: absolute;
          top: 0;
          right: 10px;
          outline: 0;
          background url("../../assets/imgs/icon.png")  no-repeat
      .content
        width 100%
        margin-top 50px
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
          position absolute
          top 50px
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
