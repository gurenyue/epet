<template>
<div class="surprise">
  <div class="surprise_title">
      <div class="titleImg">
        <img src="./surprise.png" alt="">
      </div>
      <div class="promptText">距本场结束</div>
      <div class="promptTime">09：30 ：20</div>
      <div class="more">
        <a href="">
          <img src="./more.png" alt="">
        </a>
      </div>
  </div>
  <div class="surprise_pro" ref="surprise_pro">
    <ul class="proList">
      <li class="pro-item">
        <a href="">
          <div class="pro-image">
            <img src="./01.jpg" alt="">
          </div>
          <div class="red">￥3.5</div>
          <div class="discount">省13.50</div>
        </a>

      </li>
      <li class="pro-item">
        <a href="">
          <div class="pro-image">
            <img src="./02.jpg" alt="">
          </div>
          <div class="red">￥3.5</div>
          <div class="discount">省13.50</div>
        </a>

      </li>
      <li class="pro-item">
        <a href="">
          <div class="pro-image">
            <img src="./01.jpg" alt="">
          </div>
          <div class="red">￥3.5</div>
          <div class="discount">省13.50</div>
        </a>

      </li>
      <li class="pro-item">
        <a href="">
          <div class="pro-image">
            <img src="./01.jpg" alt="">
          </div>
          <div class="red">￥3.5</div>
          <div class="discount">省13.50</div>
        </a>

      </li>
      <li class="pro-item">
        <a href="">
          <div class="pro-image">
            <img src="./01.jpg" alt="">
          </div>
          <div class="red">￥3.5</div>
          <div class="discount">省13.50</div>
        </a>

      </li>
      <li class="pro-item">
        <a href="">
          <div class="pro-image">
            <img src="./01.jpg" alt="">
          </div>
          <div class="red">￥3.5</div>
          <div class="discount">省13.50</div>
        </a>

      </li>
      <li class="pro-item">
        <a href="">
          <div class="pro-image">
            <img src="./01.jpg" alt="">
          </div>
          <div class="red">￥3.5</div>
          <div class="discount">省13.50</div>
        </a>

      </li>
      <li class="pro-item">
        <a href="">
          <div class="pro-image">
            <img src="./01.jpg" alt="">
          </div>
          <div class="red">￥3.5</div>
          <div class="discount">省13.50</div>
        </a>

      </li>
    </ul>
  </div>

</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    mounted(){
      this.$nextTick(()=>{
        var scroll = new BScroll(this.$refs.surprise_pro,{
            click:true,
            scrollX:true,
            scrollY:false
        })
      })
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .surprise
    width:100%
    height 190px
    font-size 14px
    .surprise_title
      height 60px
      padding 10px
      box-sizing border-box
      display flex
      align-items flex-start
      justify-content space-between
      .titleImg
        width: 85px
        height 24px
        &>img
          display block
          width 100%
          height 100%
      .promptText
        width: 82px
        line-height 20px
        text-align center
      .promptTime
        width 82px
        height 20px
        line-height 20px
      .more
        width 68px
        height 40px
        margin-top -10px
        &>a
          display block
          height 40px
          &>img
            width:100%
            height 100%
    .surprise_pro
      height 130px
      width 100%
      .proList
       display flex
       white-space nowrap
       float left
       &>li
         width: 100px
         height 100%
         margin-right 10px
         float: left
         &>a
           display block
           width 84px
           margin 0 8px
           .pro-image
             width 100%
             height 84px
             background-color red
             &>img
               display block
               width  84px
               height 84px
           .red
             height 22px
             line-height 22px
             text-align center
             margin-top 5px
             color red
           .discount
             height 20px
             line-height 20px
             text-align center

</style>
