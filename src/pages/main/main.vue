<template>
  <div>
      <epet-header></epet-header>
      <div class="allmodul"  ref="module">
        <div class="modules">
          <!--轮播-->
          <epet-banner :imgList="imgList" :file="file"></epet-banner>
          <split></split>
          <!--小分类-->
          <div class="columnnavdiv">
            <epet-column></epet-column>
          </div>
          <split></split>
          <!--每日疯抢-->
          <div class="surprise_day">
            <surprise></surprise>
          </div>
          <!--热门栏目-->
          <hotColumn></hotColumn>
          <!--热视频-->
          <hotVideo></hotVideo>
          <split></split>
          <!--体验馆-->
          <experience></experience>
          <!--品牌特卖-->
          <brandSale></brandSale>
          <!--口碑评价-->
          <ratings></ratings>
          <split></split>
          <mainfooter></mainfooter>
        </div>
      </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  //  引入组件
  import header from '../../components/header/header.vue'
  import split from '../../components/split/split.vue'
  import banner from '../../components/banner/banner.vue'
  import column from '../../components/column/column.vue'
  import surprise from '../../components/surprise/surprise.vue'
  import hotColumn from '../../components/hotColumn/hotColumn.vue'
  import hotVideo from '../../components/hotVideo/hotVideo.vue'
  import experience from '../../components/experience/experience.vue'
  import brandSale from '../../components/brandSale/brandSale.vue'
  import ratings from '../../components/ratings/ratings.vue'
  import mainfooter from '../../components/mainfooter/mainfooter.vue'
  export default {
    data(){
      return {
        file: 'banner1',
        imgList: [
          {url: '01.jpg'},
          {url: '02.jpg'},
          {url: '03.jpg'},
          {url: '04.jpg'},
          {url: '05.jpg'},
          {url: '06.jpg'},
          {url: '07.jpg'}
        ]

      }
    },
    mounted() {
//      更新主页的数据
      this.$store.dispatch('getMain', () => { // 当此函数执行时, 数据状态更新了
        this.$nextTick(()=>{
          var scroll =new BScroll(this.$refs.module,{
            click :true
          })
        })
      })
    },

//注册组件标签
      components: {
        'epet-header': header,
        'epet-banner': banner,
        'epet-column': column,
        split,
        surprise,
        hotColumn,
        hotVideo,
        experience,
        brandSale,
        ratings,
        mainfooter
      }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .allmodul
    width 100%
    height 522px
    position relative
    overflow hidden
    float: left

</style>
