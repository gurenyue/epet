<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item v-for="(tab,index) in tabList" :key="index"  :id="tab.id">{{tab.content}}</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item v-for="(tab,index) in tabList" :key="index"  :id="tab.id">
        <!--<mt-cell  :title="tab.title" />-->
        这是内容区{{tab.id}}
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        tabList:[
          {id:'01',title:'内容',content:'为你推荐'},
          {id:'02',title:'测试',content:'狗狗主粮'},
          {id:'04',title:'选项',content:'狗狗服饰'},
          {id:'05',title:'测试',content:'狗狗主粮'},
          {id:'06',title:'选项',content:'狗狗服饰'},
          {id:'07',title:'测试',content:'狗狗主粮'},
          {id:'08',title:'选项',content:'狗狗服饰'},
          {id:'09',title:'内容',content:'为你推荐'},
          {id:'10',title:'测试',content:'狗狗主粮'},
          {id:'14',title:'选项',content:'狗狗服饰'},
          {id:'15',title:'测试',content:'狗狗主粮'},
          {id:'16',title:'选项',content:'狗狗服饰'},
          {id:'17',title:'测试',content:'狗狗主粮'},
          {id:'18',title:'选项',content:'狗狗服饰'}
        ]
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
.mint-navbar
  width 70px
  height 700px

  .mint-tab-item
    display block
    width: 70px
    height  30px
    text-align center

</style>
