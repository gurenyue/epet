<template>
  <div class="activity">
    <ul class="activityList">
      <li v-for="( nav, index) in main.navs">
        <a href="">
          <img :src="nav.image" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
      computed:mapState(['main'])
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .activity
    height 175px
    .activityList
      &>li
        width:25%
        height 50%
        float left
        &>a
          display block
          &>img
            width 100%
</style>
