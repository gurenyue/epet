<template>
  <div class="experience">
    <div class="title">
      <div class="titleImg">
        <img src="./experience.png" alt="">
      </div>
      <div class="more">
        <a href="">
          <img src="./more.png" alt="">
        </a>
      </div>
    </div>
    <div class="imgWrapper">
        <a class="titleImg">
          <img src="./dog.jpg" alt="">
        </a>
    </div>
  </div>
</template>

<script>
  export default{}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .experience
    .title
      height 62px
      position relative
      .titleImg
        width 100%
        height 100%
        &>img
          height 100%
          margin 0 auto
          display block
      .more
        text-align: right;
        right: 0;
        top: 1px;
        position absolute
        width 120
        height 50px
        &>a
          display block
          margin-top: 7px
          &>img
            width 60px

    .imgWrapper
      height 155px
      &>a
        display block
        width 100%
        &>img
          width 100%
</style>
