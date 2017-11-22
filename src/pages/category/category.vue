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
     <keep-alive>
       <router-view></router-view>
     </keep-alive>
  </div>

</template>
<script>
  export default{

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .categorybox
   .categoryHeader
     box-sizing border-box
     padding 0 15px
     width 100%
     height 40px
     display flex
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

</style>
