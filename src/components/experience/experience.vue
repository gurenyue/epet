<template>
  <div class="experience" v-if="main.video">
    <div class="title">
      <div class="titleImg">
        <img :src="video.tit2.center_img" alt="">
      </div>
      <div class="more">
        <a href="">
          <img :src="video.tit2.right_img" alt="">
        </a>
      </div>
    </div>
    <div class="imgWrapper">
        <a class="titleImg">
          <img :src="video.value.tiyan_img" alt="">
        </a>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    computed:{
      ...mapState(['main']),
      video(){
        return this.main.video
      }
    }
  }
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
