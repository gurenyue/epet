<template>
  <div class="sort" v-if="category">
      <div class="tab" ref="tabs">
          <mt-navbar v-model="selected">
            <mt-tab-item  v-for="(tab,index) in category" :key="index"  :id="index"
                          @click="changeActive(index)">
              {{tab.title}}
            </mt-tab-item>
          </mt-navbar>
      </div>
      <div class="content" ref="contents">
        <scroller>
        <mt-tab-container v-model="selected" >
          <mt-tab-container-item  v-for="(tab,index) in category" :key="index"  :id="index">
            <div class="item01" v-if="tab.type">
              <div class="show">
                <a href="">{{tab.type[0].title}}</a>
                <ul>
                  <li class="fl mt10" v-for="(item,index) in tab.type[0].list">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" :src="item.avator">
                      </div>
                      <p>{{item.name}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="item02" v-if="tab.type[1]">
              <div class="show">
                <a href="">{{tab.type[1].title}}</a>
                <ul>
                  <li class="fl mt10"  v-for="(item,index) in tab.type[1].list">
                    <a href="" class="db">
                      <div class="rela">
                        <img class="image" :src="item.avator">
                      </div>
                      <p>{{item.name}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
        </scroller>

      </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return {
        selected:0
      }
    },
    computed:{
      ...mapState(['category']),

    },
    methods:{
      _initScroll(){
        var tabscroll = new BScroll(this.$refs.tabs,{
          click:true
        })
      },
      changeActive(id){
        this.selected = id;
      },

    },
    mounted(){
      this.$store.dispatch('getCategory', () => { // 当此函数执行时,数据状态更新了
        this.$nextTick(()=>{
          this._initScroll()
        })
      })
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
.sort
  width 100%
  height 600px
  overflow hidden
  .tab
    height 100%
    width 70px
    float left
    position relative
    z-index 10
    .mint-navbar
      width 70px
      /*height 700px*/
      display flex
      flex-direction: column
      float left
      box-sizing border-box
      border-right: 1px solid #cbcbcb;
      .mint-tab-item
        display block
        width: 70px
        height  50px
        text-align center
        padding 0
        .mint-tab-item-label
          font-size 13px
          text-align center
          line-height 30px
          height 30px
          padding-top: 10px

  .content
    width 303px
    height 100%
    box-sizing border-box
    border-top: 1px solid #f3f5f7;
    float right
    position relative
    .mint-tab-container
      position relative
      width 100%
      .mint-tab-container-wrap
        width 100%
        .item01
          padding: 15px 5px 20px;
          height: 300px
          box-sizing border-box
          .show
            font-size: 12px;
            line-height 20px
            &>a
              display block
              padding-left 5px
              margin-top 10px
              font-size: 12px;
              line-height 20px
              color: #999;
            &>ul
              width 100%
              float left
              &>li
                box-sizing border-box
                width: 33.33%;
                padding: 0 5px;
                margin-top: 10px;
                float left
                &>a
                  display block
                  &>div
                    width 1
                    &>img
                      width 100%
                  &>p
                    text-align center
        .item02
          padding: 15px 5px 20px;
          /*height: 300px*/
          /*display inline-block*/
          float left
          box-sizing border-box
          .show
            font-size: 12px;
            line-height 20px
            &>a
              display block
              padding-left 5px
              margin-top 10px
              font-size: 12px;
              line-height 20px
              color: #999;
            &>ul
              width 100%
              float left
              &>li
                box-sizing border-box
                width: 50%;
                padding: 0 5px;
                margin-top: 10px;
                float left
                &>a
                  display block
                  &>div
                    width 135 px
                    height 66px
                    border: 1px solid #f3f4f5;
                    text-align: center;
                    padding: 5px 10px;
                    box-sizing border-box
                    &>img
                      width 100%
                  &>p
                    text-align center




</style>
