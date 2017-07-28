<style lang="stylus"scoped>
  @import '../../assets/styl/rem.styl'
  .page6
    width 100%
    height 100%
    background-image url("http://img.ppx.easyto.com/images/wish/page6/背景3.png")
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
          color #f8cb0c
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
    .page6Rules
      position absolute
      z-index: 1000
      width 100%
      height 100%
      background-image url("http://img.ppx.easyto.com/images/wish/page4/许愿H5-页面新-7-浮层.png")
      background-repeat no-repeat
      background-size 100%
      top 0
      left 0
      .page6Clos
        display inline-block
        width rem(66)
        height rem(66)
        background-image url("http://img.ppx.easyto.com/images/wish/page4/关闭-6.png")
        background-size 100%
        position absolute
        top rem(400)
        left rem(350)
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
        <img src="http://img.ppx.easyto.com/images/wish/page6/爱心-拷贝-4.png" class="bigHeart">
        <p class="heartNum">{{wish.praiseNum}}</p>
      </div>
    </div>
    <footer class="footpage6">
      <div class="btnpage6">
        <button class="btnLeft" @click="showRules">邀请小伙伴帮我点赞</button>
        <button class="btnRight" @click="toIndex">返回首页</button>
      </div>
      <div class="page6ma">
        <p>扫描二维码，下载皮皮虾旅行哦</p>
        <img src="http://img.ppx.easyto.com/images/wish/page6/第九页二维码.png" alt="">
      </div>
    </footer>
    <div v-if="page6Show" class="page6Rules" name="Fade">
      <span class="page6Clos" @click="hideRules"></span>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import IndexService from '../../services/indexService'
  const ERR_OK = 200
  export default {
    data () {
      return {
        wish: {},
        rulesShow: false,
        page6Show: false,
        id: '',
        userId: '',
        url:''
      }
    },
    created () {
      this.id = this.$route.params.id
      // 设置一个开关来避免重负请求数据
      this.loadData()
      this.url = "http://www.etherchen.com/#/share/"+this.id
    },
    mounted () {
      this.id = this.$route.params.id
      this.url = "http://www.etherchen.com/#/share/"+this.id
      const url = document.location.href
      IndexService.signature(url)
        .then((res) => {// 获得签名配置
          let Data = res.data;
          console.log(Data)
          // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作
          wx.config({
            debug: true, // 开启调试模式,开发时可以开启
            appId: 'wxd934d895968c256e',   // 必填，公众号的唯一标识   由接口返回
            timestamp: Data.timestamp, // 必填，生成签名的时间戳 由接口返回
            nonceStr: Data.nonceStr,    // 必填，生成签名的随机串 由接口返回
            signature: Data.signature,   // 必填，签名 由接口返回
            jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 此处填你所用到的方法
          })
        })
      wx.ready(() => {
        wx.onMenuShareAppMessage({
          title: '琛的测试页面', // 分享标题
          desc: '试试看行不行？', // 分享描述
          link: this.url, // 分享链接
          imgUrl: 'http://tvax4.sinaimg.cn/crop.0.24.1242.1242.180/7ca780bely8fggcd26rdej20yi0zvwh7.jpg', // 分享图标
          type: '', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
            // 用户确认分享后执行的回调函数
            alert('欢迎进入琛的页面')
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
            alert('早点滚')
          }
        })
        wx.onMenuShareTimeline({
          title: shareTitle, // 分享标题
          imgUrl: imgUrl, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            // 用户取消分享后执行的回调函数
          }
        })
      })
    },
    methods: {
      wx (title, desc, link){

      },

      invite () {
        this.$router.push({path: '/share'})
      },
      toIndex () {
        this.$router.push({path: '/'})
      },
      loadData(){
        axios.get('http://101.251.240.134:8080/wish/api/v1/wish/' + this.id)
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
      showRules()
      {
        this.page6Show = true
      }
      ,
      hideRules()
      {
        this.page6Show = false

      }
    }
  }
</script>

