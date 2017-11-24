<template>
  <div class="ratings" @click="next" v-if="main.ratings">
    <div class="title">
      <div class="titleImg">
        <img src="./ratings.png" alt="">
      </div>
      <div class="more">
        <a href="">
          <img src="./more.png" alt="">
        </a>
      </div>
    </div>
    <div class="content">
      <ul class="judgeList">
        <li v-for="(rating, index) in ratings" :key="index">
          <a href="">
            <div class="judge-item">
              <div class="mainImg">
                <img :src="rating.image" alt="">
                <div class="join_time">{{rating.time}}</div>
              </div>
              <div class="user">
                <span class="fl">{{rating.username}}</span>
                <span class="fr">{{rating.ownpet}}</span>
              </div>
              <div class="judge">
                {{rating.text}}
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    computed:{
      ...mapState(['main']),
      ratings(){
        return this.main.ratings
      }
    },
    methods:{
      next(){
        console.log(this.ratings);
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .ratings
    display inline-block
    width 100%
    .title
      height 45px
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
      padding-right 10px
      padding-bottom 10px
      .judgeList
        float left
        width 100%
        &>li
          width 50%
          float left
          &>a
            display block
            width 100%
            .judge-item
              margin-left 10px
              background-color #f5f5f5
              margin-top 10px
              padding-bottom 15px
              .mainImg
                width 100%
                height 150px
                overflow hidden
                position: relative
                &>img
                  display block
                  width 100%
                  height 172px
                &>div
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  background: rgba(0,0,0,.4);
                  color: #fff;
                  font-size: 12px;
                  line-height 20px
                  text-align center
              .user
                box-sizing: border-box
                padding 0 5px
                font-size 12px
                margin-top 5px
                width 100%
                height 20px
                .fl
                  float left
                  padding: 5px;
                .fr
                  float right
                  background: #ddd;
                  border-radius: 5px;
                  padding: 5px;
              .judge
                overflow hidden
                height 60px
                padding 0 5px
                margin-top 5px
                font-size  13px
                line-height 20px
</style>
