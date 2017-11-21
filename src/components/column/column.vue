<template>
  <div class="activity">
    <ul class="activityList">
      <li>
        <a href="">
          <img src="./01.png" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="./02.png" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="./03.png" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="./04.png" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="./05.png" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="./06.png" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="./07.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="./08.jpg" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{

  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .activity
    width 100%
    height 175px
    .activityList
      width 100%
      height 100%
      &>li
        width:25%
        height 50%
        float left
        &>a
          display block
          height 100%
          &>img
            width 100%
</style>
