<template>
  <div class="brand" ref="brand" >
    <div class="item" >
      <div class="item01" v-for="(brand,index) in brands" :key="index" v-if="brand.title" >
        <div class="title">
          <span class="c999">—— {{brand.title}} ——</span>
        </div>
        <div class="show">
          <ul class="brandlist" >
            <li v-for="(item,index) in brand.list" :key="index">
              <a href="" class="db">
                <div class="img">
                  <img class="image" :src="item.avator">
                </div>
                <p class="name">{{item.name}}</p>
                <p class="address">{{item.guojia}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import split from '../../components/split/split.vue'
  export default{
    mounted(){
      this.$store.dispatch('getBrands', () => { // 当此函数执行时,数据状态更新了
        this.$nextTick(()=>{
          this._initScroll()
        })
      })
    },
    computed:{
      ...mapState(['brands']),

    },
    methods:{
      _initScroll(){
        var scroll = new BScroll(this.$refs.brand,{
          click:true
        })
      }
    },
    components:{
      split
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.brand
  width 100%
  height 600px
  overflow hidden
  .item
    border-top: 3px solid #cbcbcb;
    .item01
      /*height: 300px*/
      overflow hidden
      box-sizing border-box
      padding-bottom: 15px;
      margin-bottom: 10px;
      .title
        width 100%
        height 40px
        padding-top 20px
        text-align center
        box-sizing border-box
        font-size 12px
        color #999999
      .show
        font-size: 12px;
        line-height 20px
        padding 0 5px
        float left
        &>ul
          width 100%
          overflow hidden
          &>li
            box-sizing border-box
            width: 33.33%;
            padding: 0 5px;
            float left
            margin-top: 20px;
            &>a
              display block
              &>div
                border   1px solid #e2e2e2
                text-align  center
                padding  10px 10px 10px;
                box-sizing  border-box
                &>img
                  max-width: 90%;
                  margin: 10px auto 0;
                  height: 40px;
                  right: 0;
                  display block
              &>p
                text-align center
</style>
