<template>
  <div class="ratings">
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
        <li>
          <a href="">
            <div class="judge-item">
              <div class="mainImg">
                <img src="./rating.jpg" alt="">
              </div>
              <div class="user">
                <span class="fl">鲍***美</span>
                <span class="fr">博美</span>
              </div>
              <div class="judge">
                不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。
                在这里购物，我觉得放心，安心，省心。
                质量有保障，售货服务也很贴心，及时。
                这不仅仅是个购物平台，更是爱猫人的天地。
                祝福E宠可以越走越好，有更多丰富的商品
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="judge-item">
              <div class="mainImg">
                <img src="./rating.jpg" alt="">
              </div>
              <div class="user">
                <span class="fl">鲍***美</span>
                <span class="fr">博美</span>
              </div>
              <div class="judge">
                不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。
                在这里购物，我觉得放心，安心，省心。
                质量有保障，售货服务也很贴心，及时。
                这不仅仅是个购物平台，更是爱猫人的天地。
                祝福E宠可以越走越好，有更多丰富的商品
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="judge-item">
              <div class="mainImg">
                <img src="./rating.jpg" alt="">
              </div>
              <div class="user">
                <span class="fl">鲍***美</span>
                <span class="fr">博美</span>
              </div>
              <div class="judge">
                不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。
                在这里购物，我觉得放心，安心，省心。
                质量有保障，售货服务也很贴心，及时。
                这不仅仅是个购物平台，更是爱猫人的天地。
                祝福E宠可以越走越好，有更多丰富的商品
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="judge-item">
              <div class="mainImg">
                <img src="./rating.jpg" alt="">
              </div>
              <div class="user">
                <span class="fl">鲍***美</span>
                <span class="fr">博美</span>
              </div>
              <div class="judge">
                不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。
                在这里购物，我觉得放心，安心，省心。
                质量有保障，售货服务也很贴心，及时。
                这不仅仅是个购物平台，更是爱猫人的天地。
                祝福E宠可以越走越好，有更多丰富的商品
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="judge-item">
              <div class="mainImg">
                <img src="./rating.jpg" alt="">
              </div>
              <div class="user">
                <span class="fl">鲍***美</span>
                <span class="fr">博美</span>
              </div>
              <div class="judge">
                不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。
                在这里购物，我觉得放心，安心，省心。
                质量有保障，售货服务也很贴心，及时。
                这不仅仅是个购物平台，更是爱猫人的天地。
                祝福E宠可以越走越好，有更多丰富的商品
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="judge-item">
              <div class="mainImg">
                <img src="./rating.jpg" alt="">
              </div>
              <div class="user">
                <span class="fl">鲍***美</span>
                <span class="fr">博美</span>
              </div>
              <div class="judge">
                不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。
                在这里购物，我觉得放心，安心，省心。
                质量有保障，售货服务也很贴心，及时。
                这不仅仅是个购物平台，更是爱猫人的天地。
                祝福E宠可以越走越好，有更多丰富的商品
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{}
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
                &>img
                  display block
                  width 100%
                  height 150px
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
