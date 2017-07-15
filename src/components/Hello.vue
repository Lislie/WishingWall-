<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../assets/styl/rem.styl'
  #wishList
    width 100%
    height rem(1334)
    background-image url("../assets/img/背景2.png");
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
        background-image url("../assets/img/城堡.png")
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
            .yourImg
              width rem(80)
              border-radius 50%
              float left
          .listContainer
              margin-top rem(20)
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
                background url("../assets/img/爱心.png") no-repeat
                background-size 100%
                vertical-align middle
              .heartShow
                display inline-block
                width rem(26)
                height rem(21)
                background url("../assets/img/爱心-拷贝-2.png") no-repeat
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
        background-image url("../assets/img/图层-21.png")
        background-size 100%
        font-size rem(30)
        background-color transparent
        border none

</style>
<template>
  <div id="wishList">
    <header>
      <div class="title">
        <h1 class="listTitle">心愿墙</h1>
      </div>
      <div class="rules">
        <img src="../assets/img/活动规则.png" alt="活动规则">
        <h3>活动规则</h3>
      </div>
    </header>
    <div class="content">
      <ul v-for="(item, index) in wish" class="lists">
        <li class="list" >
          <div class="listHead">
            <img :src='item.headUrl' alt="用户头像" class="yourImg">
            <h3>{{item.nickname}}</h3>
            <p>{{item.time}}</p>
          </div>
          <div class="listContainer">
            {{item.wish}}
          </div>
          <div class="listFoot">
            <div class="heartWrapper">
              <span :class="{'heart':heart,'heartShow':!heart}" @click="changeHeart(index)" ref='{index}'></span>
              <span class="heartNum">{{item.praiseNum}}</span>
            </div>

          </div>
        </li>
      </ul>
    </div>
    <footer>
      <Button type="primary" size="large" class="button">发表心愿</Button>
    </footer>
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
      heart: true
    }
  },
  computed: {
    selectWishs () {
      let wishs = []
      this.wish.forEach((wish) => {
        if (wish.count) {
          wishs.push(wish)
        }
      })
      return wishs
    }
  },
  methods: {
    changeHeart (index) {
      var _self = this
      this.$refs.index.onclick = function () {
        _self.heart = !_self.heart
      }
//      console.log(index)
//      this.heart = !this.heart
    }
  }
}
</script>

