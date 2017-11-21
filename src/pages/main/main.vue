<template>
  <div>
      <epet-header></epet-header>
      <div class="allmodul"  ref="module">
        <div class="modules">
          <epet-banner :imgList="imgList" :file="file"></epet-banner>
          <split></split>
          <div class="columnnavdiv">
            <epet-column></epet-column>
          </div>
          <split></split>
          <div class="surprise_day">
            <surprise></surprise>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  //  引入组件
  import header from '../../components/header/header.vue'
  import split from '../../components/split/split.vue'
  import banner from '../../components/banner/banner.vue'
  import column from '../../components/column/column.vue'
  import surprise from '../../components/surprise/surprise.vue'
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
    mounted(){
      this.$nextTick(()=>{
        var scroll =new BScroll(this.$refs.module,{
          click :true
        })
      })
    },
//注册组件标签
      components: {
        'epet-header': header,
        'epet-banner': banner,
        'epet-column': column,
        surprise,
        split
      }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .allmodul
    width 100%
    height 522px
    position relative
    overflow hidden
    .surprise_day
      height 2000px

</style>
