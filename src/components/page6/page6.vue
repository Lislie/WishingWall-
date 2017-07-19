<style lang="stylus"scoped>
  @import '../../assets/styl/rem.styl'
  .page6
    width 100%
    height rem(1334)
    background-image url("背景3.png")
    background-size 100%
    .headpage6
      width 100%
      height rem(220)
      text-align center
      .headH3
        font-size rem(36)
        margin 0 rem(80) 0
        padding-top rem(60)
        text-align left
        color #fff
        overflow hidden
      p
        font-size rem(36)
        color #fff
        text-align left
        overflow hidden
        margin 0 rem(80) 0
        span
          color #f8cb0c
    .contentPage6
      display flex
      margin 0 rem(32)
      .page6List
        width rem(450)
        display flex
        overflow  hidden
        margin-right rem(14)
        border-radius rem(20)
        box-sizing border-box
        background-color rgba(2,68,112,.8)
        padding 0 rem(20)
        flex-direction column
        font-size rem(30)
        .listHead
          text-align center
          padding-top rem(28)
          color #f8cb0c
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
      .page6Heart
        width rem(250)
        height rem(350)
        background-color rgba(2,68,112,.8)
        border-radius rem(20)
        display flex
        align-items center /*垂直居中*/
        justify-content center /*水平居中*/
        flex-direction column
        .bigHeart
          width rem(118)
        p
        font-size rem(30)
        color #f8cb0c
    .footpage6
      width 100%
      margin-top rem(32)
      margin-bottom rem(48)
      .btnpage6
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
      .page6ma
        margin-top rem(46)
        font-size rem(30)
        color #f8cb0c
        img
          margin-top rem(38)
          width rem(256)



</style>

<template>
  <div class="page6">
    <header class="headpage6">
      <h3 class="headH3">您已提交过名单</h3>
      <p >当前排名: <span>{{wish.order}}</span></p>
    </header>
    <div class="contentPage6">
      <div class="page6List">
        <div class="listHead">
          <img :src="wish.headUrl" alt="用户头像" class="wishImg">
          <h3 class="wishName">{{wish.nickname}}</h3>
          <p class="wishTime">{{wish.time | moment}}</p>
        </div>
        <div class="listContainer">
          {{wish.wish}}
        </div>
      </div>
      <div class="page6Heart">
        <img src="./爱心-拷贝-4.png" class="bigHeart">
        <p class="heartNum">{{wish.praiseNum}}</p>
      </div>
    </div>
    <footer class="footpage6">
      <div class="btnpage6">
        <button class="btnLeft" @click="invite">邀请小伙伴帮我点赞</button>
        <button class="btnRight">返回首页</button>
      </div>
      <div class="page6ma">
        <p>扫描二维码，下载皮皮虾旅行哦</p>
        <img src="./第九页二维码.png" alt="">
      </div>
    </footer>
  </div>

</template>

<script type="text/ecmascript-6">
  import axios from 'axios'

  const ERR_OK = 200
  export default {
    data () {
      return {
        wish: {},
        rulesShow: false
      }
    },
    created () {
      // 设置一个开关来避免重负请求数据
      axios.get('http://101.251.240.134:8080/wish/api/v1/wish/fc3825e6-b05c-486e-8ac0-a1212949d011')
        .then((response) => {
          if (response.data.code === ERR_OK) {
            this.wish = response.data.data
            console.log(this.wish)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    methods: {

    }
  }

</script>

