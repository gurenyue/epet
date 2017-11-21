<template>
  <div class="banner">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="(img,index) in imgList" :key="index">
        <img :src="`../../../static/img/${file}/${img.url}`" alt="">
      </mt-swipe-item>
      <!--<mt-swipe-item>-->
        <!--<img src="../../assets/imgs/banner1/01.jpg" alt="">-->
      <!--</mt-swipe-item>-->
    </mt-swipe>
  </div>
</template>

<script>
  export default{
    props:{
      file : String,
      imgList : Array
    },
    computed:{
      url(){
        return `../../assets/imgs/${file}/${img.url}`
      }
    }

  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .banner
    width 100%
    height 160px
    position relative
    .mint-swipe
      width 100%
      height 100%
      .mint-swipe-items-wrap
        width 100%
        height 100%
        .mint-swipe-item
          height 100%
          &>img
            width 100%
            height 100%

</style>
