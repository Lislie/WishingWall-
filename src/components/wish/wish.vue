<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../assets/styl/rem.styl'
  #wishList
    overflow:-Scroll
    overflow-y hidden
    width 100%
    height rem(1334)
    background-image url("背景2.png");
    header
      width 100%
      height: rem(266)
      text-align center
      .castle
        position absolute
        width 100%
        height 100%
      .title
        width 100%
        height 100%
        display flex
        align-items center /*垂直居中*/
        justify-content center /*水平居中*/
        background-image url("城堡.png")
        background-size 100%
      h1
          font-size rem(50)
          line-height rem(50)
          margin-bottom rem(40)
          color white
      .rules
        position absolute
        top rem(36)
        right rem(35)
        overflow hidden
        h3
          font-size rem(30)
          color white
        img
          width rem(40)
    .content
      color #f8cb0c
      margin-right rem(32)
      margin-left rem(32)
      height rem(760)
      top rem(-20)
      overflow hidden
      .contWrapper
        width 100%
        overflow hidden
      .lists
        float left
        position
        margin-right rem(10)
        &:nth-child(even)
          float right
        &:nth-child(1)
          position relative
          &:before
            content ""
            display block
            width rem(66)
            height rem(62)
            position absolute
            background-image url("皇冠.png")
            background-size 100%
            left rem(60)
        &:nth-child(2)
          position relative
          &:before
            content ""
            display block
            width rem(66)
            height rem(62)
            position absolute
            background-image url("银冠.png")
            background-size 100%
            left rem(60)
        .rangKing:first-of-type
          position absolute
          width 100%
          right rem(15)
          top rem(240)
          .gold
            width rem(66)
            height rem(62)
            right rem(20)
          .sliver
            width rem(66)
            height rem(62)
            position absolute
            right  0
        .list
          width rem(332)
          overflow  hidden
          margin-bottom rem(20)
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
          .listFoot
              height rem(80)
              position relative
            .heartWrapper
              overflow hidden
              position absolute
              right 0
              bottom rem(5)
              .heart
                display inline-block
                width rem(26)
                height rem(21)
                background url("爱心.png") no-repeat
                background-size 100%
                vertical-align middle
              .heartShow
                display inline-block
                width rem(26)
                height rem(21)
                background url("爱心-拷贝-2.png") no-repeat
                background-size 100%
                vertical-align middle
              .heartNum
                vertical-align middle
                font-size rem(30)
    footer
      height rem(180)
      display flex
      align-items center /*垂直居中*/
      justify-content center /*水平居中*/
      .button
        width rem(260)
        height rem(115)
        background-image url("发表心愿.png")
        background-size 100%
        background-color transparent
        border none

    .wishRules
      position fixed
      z-index: 100
      width 100%
      height 100%
      background rgba(7,17,27,0.8)
      top 0
      left 0
      .rulesBox
        width rem(624)
        height rem(894)
        margin rem(114) rem(64) 0
        background-image url("./飞毯.png")
        background-size 100%
        display flex
        align-items center /*垂直居中*/
        justify-content center /*水平居中*/
        .rulesText
          width rem(360)
          height rem(660)
          overflow hidden
          .textWrapper
            width 100%
            .rulesTitle
              font-size rem(30)
              color #f8cb0c
              padding-bottom rem(50)
            .rulesList
              padding-bottom rem(36)
              text-align left
              h3
                font-size rem(30)
                color #f8cb0c
              p
                font-size rem(26)
                color #fff
              .rulesStar
                font-size rem(26)
                color #fff
                padding-bottom rem(10)
                &:before
                  content ""
                  width rem(24)
                  height rem(23)
                  display inline-block
                  background-image url("星.png")
                  background-size 100%
      .rulesClos
        display inline-block
        width rem(66)
        height rem(66)
        background-image url("./关闭-6.png")
        background-size 100%
        margin-top rem(8)
</style>
<template>
  <div id="wishList">
    <header>
      <div class="title">
        <h1 class="listTitle">心愿墙</h1>
      </div>
      <div class="rules" @click="showRules">
        <img src="./活动规则.png" alt="活动规则">
        <h3>活动规则</h3>
      </div>
    </header>
    <div class="content" ref="contWrapper">
      <div class="contWrapper">
        <ul v-for="(item, index) in wish" class="lists">
          <!--<div class="rangKing">-->
          <!--<img src="./皇冠.png" alt="第一" class="gold">-->
          <!--<img src="./银冠.png" alt="第二" class="sliver">-->
          <!--</div>-->
          <li class="list" >
            <div class="listHead">
              <img :src='item.headUrl' alt="用户头像" class="wishImg">
              <h3 class="wishName">{{item.nickname}}</h3>
              <p class="wishTime">{{item.time}}</p>
            </div>
            <div class="listContainer">
              {{item.wish}}
            </div>
            <div class="listFoot">
              <div class="heartWrapper">
                <span :class="item.heartNum?'heart':'heartShow'" @click="changeHeart(index)"></span>
                <span class="heartNum">{{item.praiseNum}}</span></div>
            </div>
          </li>
        </ul>
      </div>

    </div>
    <footer>
      <Button type="primary" size="large" class="button" @click="pubWish"></Button>
    </footer>
    <div v-show="rulesShow" class="wishRules" >
      <div class="rulesBox" >
        <div class="rulesText" ref="rulesText" >
          <div class="textWrapper"  >
              <div class="rulesTitle">活动规则</div>
              <div class="rulesList">
                <h3>1.活动时间</h3>
                <p>2017.07.25 -- 2017.9.28</p>
              </div>
              <div class="rulesList">
                <h3>2.参选条件</h3>
                <p>下载皮皮虾旅行App,进行报名并收集好友祝福</p>
              </div>
              <div class="rulesList">
                <h3>3.参选规则</h3>
                <p class="rulesStar">点赞数排名第一，第二名，将获得机票+点赞数相应的积分数</p>
                <p class="rulesStar">点赞数排名第3~22名，将获得。。。+点赞相应的积分数</p>
                <p class="rulesStar">每位参与用户都将获得点赞数相应的积分数</p>
                <p class="rulesStar">以上奖金都需要通过下载皮皮虾旅行app领取，积分将发送至报名手机号相应的皮皮虾旅行账户中</p>
                <p class="rulesStar">请在活动截止后1个月内下载APP领取积分，逾期积分未领取，将视为放弃领取资格，积分失效~</p>
              </div>
              <div class="rulesList">
                <h3>4.评选方式</h3>
                <p>本场获得祝福最多用户票选</p>
              </div>
            </div>
        </div>
      </div>
      <span class="rulesClos" @click="hideRules"></span>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
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
      axios.get('/api/wish')
        .then((response) => {
          if (response.data.code === ERR_OK) {
            this.wish = response.data.data
            this.$nextTick(() => {
              this._initScroll()
            })
          }
          console.log(response, this.wish)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    methods: {
      _initScroll () {
        this.rulesScroll = new BScroll(this.$refs.rulesText, {})
        this.contScroll = new BScroll(this.$refs.contWrapper, {})
      },
      changeHeart (index) {
        this.wish[index].heartNum = !this.wish[index].heartNum
        if (this.wish[index].heartNum) {
          this.wish[index].praiseNum ++
        } else if (!this.wish[index].heartNum) {
          this.wish[index].praiseNum --
        }
        this.$set(this.wish)
      },
      pubWish () {
        alert('发表个屁啊!')
      },
      showRules () {
        this.rulesShow = true
      },
      hideRules () {
        this.rulesShow = false
      }
    }
  }
</script>

