<template>
<div class="hotVideo">
  <div class="title">
    <div class="titleImg">
      <img src="./title.png" alt="">
    </div>
    <div class="more">
      <a href="">
        <img src="./more.png" alt="">
      </a>
    </div>
  </div>
  <div class="content">
    <div class="video">
      <a class="titleImg">
        <img src="./hotVideo.jpg" alt="">
      </a>
    </div>
    <div class="subscribe">
      <div class="textover c333">夜空中最亮的星</div>
      <div class="text">
        <span class="cmallViewIco"></span>
        <span>7397</span><span class="ml10 mr10">|</span>02:20
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default{}
</script>


<style lang="stylus" rel="stylesheet/stylus">
.hotVideo
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

  .content
    .video
      height 210px
      &>a
        display block
        width 100%
        &>img
          width 100%
    .subscribe
      height 60px
      .textover
        text-align center
        padding 10px
      .text
        color  #999
        font-size 12px
        text-align center
        .cmallViewIco
          display inline-block
          width: 10px
          height: 9px
          background-image url("./view-black.png")
          background-size 10px 9px

</style>
