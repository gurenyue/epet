<template>
<div class="brandSale">
  <ul class="brandList">
    <li>
      <div class="title">
        <span class="name">谷登新品</span>
        <span class="discount">5折限量</span>
      </div>
      <div class="imgWrapper">
        <a>
          <img src="../../assets/imgs/brand/brand01.jpg" alt="">
        </a>
      </div>
    </li>
    <li>
      <div class="title">
        <span class="name">谷登新品</span>
        <span class="discount">5折限量</span>
      </div>
      <div class="imgWrapper">
        <a>
          <img src="../../assets/imgs/brand/brand02.jpg" alt="">
        </a>
      </div>
    </li>
    <li>
      <div class="title">
        <span class="name">谷登新品</span>
        <span class="discount">5折限量</span>
      </div>
      <div class="imgWrapper">
        <a>
          <img src="../../assets/imgs/brand/brand03.jpg" alt="">
        </a>
      </div>
    </li>
    <li>
      <div class="title">
        <span class="name">谷登新品</span>
        <span class="discount">5折限量</span>
      </div>
      <div class="imgWrapper">
        <a>
          <img src="../../assets/imgs/brand/brand04.jpg" alt="">
        </a>
      </div>
    </li>
    <li>
      <div class="title">
        <span class="name">谷登新品</span>
        <span class="discount">5折限量</span>
      </div>
      <div class="imgWrapper">
        <a>
          <img src="../../assets/imgs/brand/brand05.jpg" alt="">
        </a>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
  export default{}
</script>


<style lang="stylus" rel="stylesheet/stylus">
.brandSale
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
