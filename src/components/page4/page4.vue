<style lang="stylus"scoped>
  @import '../../assets/styl/rem.styl'
  .page4
    width 100%
    height rem(1334)
    background-image url("背景3.png")
    background-size 100%
    .headpage4
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
    .contentpage4
      display flex
      margin 0 rem(32)
      height rem(344)
      .page4List
        width rem(450)
        display flex
        overflow  hidden
        margin-right rem(14)
        border-radius rem(20)
        box-sizing border-box
        background-color rgba(2,68,112,.8)
        padding 0 rem(20) 0
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
      .page4Heart
        width rem(250)
        background-color rgba(2,68,112,.8)
        border-radius rem(20)
        display flex
        align-items center /*垂直居中*/
        justify-content center /*水平居中*/
        flex-direction column
        .bigHeart
          width rem(118)
          display block
        .heartGet
          margin-top rem(30)
          display block
          font-size rem(30)
          color #f8cb0c
    .footpage4
      width 100%
      margin-top rem(60)
      margin-bottom rem(48)
      .btnpage4
        width 100%
        .btnRight
          width rem(428)
          height rem(98)
          font-size rem(30)
          color #fff
          border-radius rem(20)
          background-color #007196
      .page4ma
        margin-top rem(48)
        font-size rem(30)
        color #f8cb0c
        img
          margin-top rem(32)
          width rem(256)



</style>

<template>
  <div class="page4">
    <header class="headpage4">
      <h3 class="headH3">您的小伙伴正在参与写心愿送机票的活动快来帮他点赞</h3>
    </header>
    <div class="contentpage4">
      <div class="page4List">
        <div class="listHead">
          <!--<img  alt="用户头像" class="wishImg">-->
          <h3 class="wishName"></h3>
          <p class="wishTime"></p>
        </div>
        <div class="listContainer">
        </div>
      </div>
      <div class="page4Heart">
        <img src="./对(2).png" class="bigHeart">
        <p class="heartGet">提交心愿成功</p>
      </div>
    </div>
    <footer class="footpage4">
      <div class="btnpage4">
        <button class="btnRight">邀请小伙伴帮我点赞</button>
      </div>
      <div class="page4ma">
        <p>扫描二维码，下载皮皮虾旅行哦</p>
        <img src="./二维码.png" alt="">
      </div>
    </footer>
  </div>

</template>

<script type="text/ecmascript-6">

  export default {}

</script>

