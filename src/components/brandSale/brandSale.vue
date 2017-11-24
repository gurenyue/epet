<template>
<div class="brandSale" v-if="main.brands">
    <div class="titleImg">
      <img src="./01.png" alt="">
    </div>
  <ul class="brandList">
    <li v-for="(brand,index) in brands" :key="index">
      <div class="title">
        <span class="name">{{brand.title}}</span>
        <span class="discount">{{brand.desc}}</span>
      </div>
      <div class="imgWrapper">
        <a>
          <img :src="brand.image" alt="">
        </a>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    computed: {
      ...mapState(['main']),
      brands(){
        return this.main.brands
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
.brandSale
  .titleImg
    width 100%
    height 62px
    &>img
      height 100%
      margin 0 auto
      display block
  .brandList
    &>li
     width 100%
     .title
       padding 10px
       .name
         font-size 15px
       .discount
         font-size 12px
         color #999999
         margin-left 15px
      .imgWrapper
       height 155px
       &>a
         display block
         width 100%
         &>img
           width 100%
</style>
