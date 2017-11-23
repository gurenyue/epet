<template>
  <div class="categorybox">
     <div class="categoryHeader">
       <div class="sort nav-sort">
         <router-link to="/category/tab1">分类</router-link>
       </div>
       <div class="brand nav-sort">
         <router-link to="/category/tab2">品牌</router-link>
       </div>
     </div>
      <div class="showContent">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      </div>

  </div>

</template>
<script>
  export default{

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .categorybox
   width 100%
   height 100%
   overflow hidden
   .categoryHeader
     z-index 10
     position absolute
     box-sizing border-box
     padding 0 15px
     width 100%
     height 40px
     display flex
     background-color white
     border-bottom: 1px solid #cbcbcb;
     .nav-sort
       width  50%;
       height  40px;
       line-height  40px
       box-sizing border-box
       &>a
         display inline-block
         width 40px
         height 40px
         font-weight 700
         &.active
           color red
     .sort
       text-align  right
       padding-right  5%
     .brand
       padding-left  5%

   .showContent
     width 100%
     height 100%
     box-sizing border-box
     padding-top 40px
</style>
