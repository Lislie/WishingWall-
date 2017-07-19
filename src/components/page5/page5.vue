<style lang="stylus"scoped>
  @import '../../assets/styl/rem.styl'
  .page5
    width 100%
    height rem(1334)
    background-image url("背景3.png")
    background-size 100%
    .headPage5
      width 100%
      height rem(220)
      display flex
      align-items center /*垂直居中*/
      justify-content center /*水平居中*/
      .headH3
        font-size rem(36)
        margin rem(10) rem(80) 0
        text-align left
        color #fff
    .contentPage5
      display flex
      margin 0 rem(32)
      .page5List
        width rem(450)
        display flex
        overflow  hidden
        margin-right rem(14)
        border-radius rem(20)
        box-sizing border-box
        background-color rgba(2,68,112,.8)
        padding 0 rem(20)
        .listHead
          text-align center
          padding-top rem(28)
          .wishImg
            width rem(80)
            height rem(80)
            border-radius 50%
            float left
          .wishName
            font-size rem(26)
          .wishTime
            margin-top rem(10)
            font-style: rem(24)
        .listContainer
          margin-top rem(20)
          font-size rem(28)
      .page5Heart
        width rem(250)
        height rem(350)
        background-color rgba(2,68,112,.8)
        border-radius rem(20)
        display flex
        align-items center /*垂直居中*/
        justify-content center /*水平居中*/
        .bigHeart
          width rem(118)
    .footPage5
      width 100%
      margin-top rem(32)
      margin-bottom rem(48)
      .btnPage5
        width 100%
        .btnLeft
          width rem(328)
          height rem(98)
          font-size rem(30)
          color #fff
          background-color  #f8cb0c
          border-radius rem(20)
        .btnRight
          width rem(328)
          height rem(98)
          font-size rem(30)
          color #fff
          border-radius rem(20)
          background-color #007196
      .page5ma
        margin-top rem(46)
        font-size rem(30)
        color #f8cb0c
        img
          margin-top rem(38)
          width rem(256)



</style>

<template>
  <div class="page5">
    <header class="headPage5">
      <h3 class="headH3">您的小伙伴正在参与写心愿送机票的活动快来帮他点赞</h3>
    </header>
    <div class="contentPage5">
      <div class="page5List">
        <div class="listHead">
          <!--<img :src="wish.headUrl" alt="用户头像" class="wishImg">-->
          <h3 class="wishName"></h3>
          <p class="wishTime"></p>
        </div>
        <div class="listContainer">
        </div>
      </div>
      <div class="page5Heart">
        <img src="./爱心-拷贝-4.png" class="bigHeart">
        <p class="heartNum"></p>
      </div>
    </div>
    <footer class="footPage5">
      <div class="btnPage5">
        <button class="btnLeft">我也要参加</button>
        <button class="btnRight">返回首页</button>
      </div>
      <div class="page5ma">
        <p>扫描二维码，下载皮皮虾旅行哦</p>
        <img src="./二维码.png" alt="">
      </div>
    </footer>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {}
</script>

