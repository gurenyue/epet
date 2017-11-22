<template>
  <div class="mainfooter">
    <div class="ft">
      <span class="bt" title="触屏版">触屏版</span>
      <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
      <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
      <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
    </div>
    <div class="bottom">© wap.epet.com 版权：重庆易宠科技有限公司</div>
  </div>
</template>

<script>
  export default{}
</script>


<style lang="stylus" rel="stylesheet/stylus">
.mainfooter
  .ft
    width:100%
    height 22px
    line-height 22px
    padding: 30px 0 10px;
    text-align: center;
    &>span
      display inline-block
      padding-right: 10px;
      &>a
        color #333333
    .bt
      color red
  .bottom
    text-align  center
    padding-bottom  25px
    font-size 12px

</style>
