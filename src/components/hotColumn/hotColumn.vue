<template>
<div class="hotcolumn" >
  <div class="columnTitle">
    <a href="">
      <img src="./hotcolumn.jpg" alt="">
    </a>
  </div>
  <div class="columnContent" v-if="main.hot_content">
    <div class="left" >
      <a :href="main.hot_content.left.target.param">
        <img :src="main.hot_content.left.image" alt="">
      </a>
    </div>
    <div class="right">
      <a :href="main.hot_content.rightTop.target.param">
        <img :src="main.hot_content.rightTop.image" alt="">
      </a>
      <a :href="main.hot_content.rightBottom.target.param">
        <img :src="main.hot_content.rightBottom.image" alt="">
      </a>
    </div>
  </div>
</div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
   computed:mapState(['main'])
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .hotcolumn
    .columnTitle
      height 40px
      &>a
        display block
        width 100%
        height 100%
        &>img
          height 100%
    .columnContent
      height 190px
      display flex
      .left
        width  42.53%
        &>a
          display block
          width 100%
          &>img
            width 100%
      .right
        width  57.47%
        height 50%
        &>a
          display block
          width 100%
          &>img
            width 100%
</style>
