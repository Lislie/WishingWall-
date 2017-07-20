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
        flex-direction column
        color #f8cb0c
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
          color #f8cb0c
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
      <h3 class="headH3">您的小伙伴{{wish.nickname}}正在参与写心愿送机票的活动快来帮他点赞</h3>
    </header>
    <div class="contentpage4">
      <div class="page4List">
        <div class="listHead">
          <img :src="wish.headUrl" alt="用户头像" class="wishImg">
          <h3 class="wishName">{{wish.nickname}}</h3>
          <p class="wishTime">{{wish.time | moment}}</p>
        </div>
        <div class="listContainer">
          {{wish.wish}}
        </div>
      </div>
      <div class="page4Heart">
        <img src="./对(2).png" class="bigHeart">
        <p class="heartGet">提交心愿成功</p>
      </div>
    </div>
    <footer class="footpage4">
      <div class="btnpage4">
        <button class="btnRight" @click="invite">邀请小伙伴帮我点赞</button>
      </div>
      <div class="page4ma">
        <p>扫描二维码，下载皮皮虾旅行哦</p>
        <img src="./二维码.png" alt="">
      </div>
    </footer>
  </div>

</template>

<script type="text/ecmascript-6">
    import axios from 'axios'

    const ERR_OK = 200
//    const wx = Vue.wechat

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
      mounted () {
//          var link = '/invite'
//
//          var url = window.location.href
//          axios({
//            method: "post",
//            url: "/api/v1/signature",
//            dataType: "json",
//            data:{
//              "url":url
//            },
//            success: function ( data ) {
//              pResult = eval( data )
//              timestamp = pResult.timestamp
//              nonceStr = pResult.nonceStr
//              signature = pResult.signature
//              wx.config({
//                debug: false,
//                // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。移动端会通过弹窗来提示相关信息。如果分享信息配置不正确的话，可以开了看对应报错信息
//                appId: 'wx21744c1d2e6c62fe',
//                timestamp: timestamp,
//                nonceStr: nonceStr,
//                signature: signature,
//                jsApiList: [
//                  // 需要使用的JS接口列表,分享默认这几个，如果有其他的功能比如图片上传之类的，需要添加对应api进来
//                  'onMenuShareTimeline',
//                  'onMenuShareAppMessage'
//                ]
//              })
//
//              wx.onMenuShareAppMessage({
//                title: '小心肝小肉球正在参与皮皮虾旅行,发心愿送机票的活动,快来帮他点赞吧~', // 分享标题
//                desc: '皮皮虾旅行全心奉献，发表心愿我来帮你实现，国际知名设计师量身定制行程并赠送机票！快来参加许愿吧~', // 分享描述
//                link: link, // 分享链接
//                imgUrl: 'http://wxtest.easyto.com/weichat/paying/payImg/shareImg.png', // 分享图标
//                type: '', // 分享类型,music、video或link，不填默认为link
//                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
//                success: function () {
//                  // 用户确认分享后执行的回调函数
//                },
//                cancel: function () {
//                  // 用户取消分享后执行的回调函数
//                }
//              }) // 分享给朋友
//
//              wx.onMenuShareTimeline({
//                title: '小心肝小肉球”正在参与皮皮虾旅行发心愿送机票活动，快来帮他点赞吧~', // 分享标题
//                link: link, // 分享链接
//                imgUrl: 'http://app.easyto.com/weichat/paying/payImg/shareImg.png', // 分享图标
//                type: '', // 分享类型,music、video或link，不填默认为link
//                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
//                success: function () {
//                  // 用户确认分享后执行的回调函数
//                },
//                cancel: function () {
//                  // 用户取消分享后执行的回调函数
//                }
//              }) // 分享到朋友圈
//            }
//
//          })
      },
      methods: {
        invite () {
          this.$router.push({path: '/share'})
        }
      }
    }

</script>

