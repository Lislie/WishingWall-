<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../assets/styl/rem.styl'
  #wishList
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
      overflow hidden
      .rangKing
        position relative
        top rem(40)
        .gold
          width rem(66)
          height rem(62)
        .sliver
          width rem(66)
          height rem(62)
          float right
      .lists
        overflow hidden
        float left
        margin-right rem(10)
        &:nth-child(even)
          float right
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
      overflow auto
      background rgba(7,17,27,0.8)
      top 0
      left 0
      .rulesBox
        width rem(624)
        height rem(894)
        margin rem(114) rem(64) 0
        background-image url("./飞毯.png")
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
    <div class="content">
      <div class="rangKing">
        <img src="./皇冠.png" alt="第一" class="gold">
        <img src="./银冠.png" alt="第二" class="sliver">
      </div>
      <ul v-for="(item, index) in wish" class="lists">
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
    <footer>
      <Button type="primary" size="large" class="button" @click="pubWish"></Button>
    </footer>
    <div v-show="rulesShow" class="wishRules">
      <div class="rulesBox">
        <div class="rulesText"></div>
      </div>
      <span class="rulesClos"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wish: {
      type: Array
    }
  },
  data () {
    return {
      rulesShow: false
    }
  },
  methods: {
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
    }
  }
}
</script>

