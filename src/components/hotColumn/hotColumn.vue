<template>
<div class="hotcolumn">
  <div class="columnTitle">
    <a href="">
      <img src="./hotcolumn.jpg" alt="">
    </a>
  </div>
  <div class="columnContent">
    <div class="left">
      <a href="">
        <img src="./left.jpg" alt="">
      </a>
    </div>
    <div class="right">
      <a href="">
        <img src="./right01.png" alt="">
      </a>
      <a href="">
        <img src="./right02.png" alt="">
      </a>
    </div>
  </div>
</div>
</template>

<script>
  export default{

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
