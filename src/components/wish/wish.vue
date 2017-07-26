<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../assets/styl/rem.styl'

  #wishList
    overflow:hidden
    width 100%
    height rem(1334)
    background-image url("背景2.png");
    .wishHeader
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
        .listTitle
          font-size rem(50)
          line-height rem(50)
          margin-bottom rem(40)
          color white
      .rules
        position relative
        top rem(-240)
        left rem(280)
        overflow hidden
        .rulesH3
          font-size rem(30)
          color white
        .rulesImg
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
        height 100%
        left rem(280)
        overflow scroll
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
          height rem(472)
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
            display:block;
            overflow:hidden;
            text-align left
            text-overflow:ellipsis;
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
    .wishFooter2
      width 100%
      height rem(290)
      .button
        width rem(260)
        height rem(115)
        background-image url("发表心愿.png")
        background-size 100%
        background-color transparent
        border none


    .wishRules
      position absolute
      z-index: 999
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
          overflow auto
          .textWrapper
            width 100%
            overflow hidden
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
<style>
  .updateText{
    position: absolute;
    width: 100%;

    text-align: center;
    z-index: 999;
    color:#F8CB0C;
    display: none;
  }
  .downloadText{
    position: absolute;
    width: 100%;
    color:#F8CB0C;
    text-align: center;
    z-index: 999;
  }
  .noneData{
    display: none;
    clear: both;
  }
  .wishBtn{
    position: absolute;
    z-index: 999;
    transform: translateX(-50%);
    margin-top: 30px;
  }
  html{
    -ms-overflow-style:none;
    overflow:-moz-scrollbars-none;
  }
  /*html::-webkit-scrollbar{width:0px}*/
  ::-webkit-scrollbar {width: 0px;height: 1px;}
  ::-webkit-scrollbar-thumb {border-radius: 5px;-webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);background: rgba(0, 0, 0, 0.2);}
</style>
<template>
  <div id="wishList">
    <header class="wishHeader">
      <div class="title">
        <h1 class="listTitle">心愿墙</h1>
      </div>
      <div class="rules" @click="showRules">
        <img src="./活动规则.png" alt="活动规则" class="rulesImg">
        <h3 class="rulesH3">活动规则</h3>
      </div>
    </header>
    <div class="updateText">正在更新数据...</div>
    <div>
      <div class="content" ref="contWrapper" v-on:touchmove="stopPropagation($event)">
        <div class="contWrapper" ref="scroll"
             v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="10">
          <mt-loadmore :top-method="loadTop"  ref="loadmore">
            <ul v-for="(item, index) in lists" class="lists" >
              <li class="list" >
                <div class="listHead">
                  <img :src='item.headUrl' alt="用户头像" class="wishImg">
                  <h3 class="wishName">{{item.nickname}}</h3>
                  <p class="wishTime">{{item.time | moment}}</p>
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
          </mt-loadmore>

        </div>
      </div>
    </div>
    <div class="downloadText noneData">没有更多数据了</div>
    <div class="downloadText" v-if="loading_show">正在加载数据...</div>
    <div class="wishFooter2">
      <Button type="primary" size="large" class="button wishBtn" @click="pubWish"></Button>
    </div>
    <footer class="wishFooter">
    </footer>
    <div v-if="rulesShow" class="wishRules" name="Fade" v-on:touchmove="stopPropagation($event)">
      <div class="rulesBox">
        <div class="rulesText" ref="textWrapper" >
          <div class="textWrapper" ref="scroll"  >
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
  // import BScroll from 'better-scroll'
  import axios from 'axios'
  import Scroll from '../pull/pull-refresh.vue'
  import IndexService from '../../services/indexService'

  const ERR_OK = 200

  let conWrapper = document.querySelector('.contWrapper')
  let content = document.querySelector('.content')

  export default {
    data () {
      return {
        lists: [],
        rulesShow: false,
        CurrentPageIndex: 1,
        PageSize: 6,
        scrollY:0,//存放better-scroll的起始Y坐标
        noneDataNum:0, //没有数据的时候竖旗
        postsuccess:false,
        weixinStatus:false,
        nickName:'',
        headUrl:'',
        loading_show:false,
        userId:''
      }
    },
    created () {
      this.loadData()
      this.is_weixin()
      wx.onMenuShareTimeline({
        title: '皮皮虾旅行倾情奉献，知名规划师定制路线，并赠送机票！快来许愿', // 分享标题
        link: 'http://101.251.240.134:8080', // 分享链接，该链接域名必须与当前企业的可信域名一致
        imgUrl: 'http://img.ppx.easyto.com/images/wish/page6/第九页二维码.png', // 分享图标
        success: function () {
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      });
      wx.onMenuShareAppMessage({
        title:'皮皮虾旅行倾情奉献，知名规划师定制路线，并赠送机票！快来许愿', // 分享标题
        desc: '', // 分享描述
        link: 'http://101.251.240.134:8080/', // 分享链接，该链接域名必须与当前企业的可信域名一致
        imgUrl: 'http://img.ppx.easyto.com/images/wish/page6/第九页二维码.png', // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      });
    },
    methods: {
      stopPropagation(event){
        event.stopPropagation()
      },
      loadTop() {
        console.log("下拉刷新")
        this.reCeateDate()//新的请求
        this.$refs.loadmore.onTopLoaded();
      },
      loadMore() {
        console.log("上拉加载更多")
        this.loading = true;
        this.ajaxdate()
        this.loading = false;
      },
      loadData(){
        // 设置一个开关来避免重负请求数据
        // axios.get('http://101.251.240.134:8080/wish/api/v1/wish')
        IndexService.wishwall(this.CurrentPageIndex,'fc3825e6-b05c-486e-8ac0-a1212949d001','oHSNYwK0DNBLRf6ts3qbzzedILDQ','2')
          .then((response) => {
            console.log(response)
            if (response.code === ERR_OK) {
              this.lists = response.data
              this.postsuccess=true
              this.CurrentPageIndex += 1 // 页面+1
            }
          })
          .catch((err) => {
            console.log(err)
          })
      },
      reCeateDate(){
        console.log(1)
        this.CurrentPageIndex=1
        //因为下拉要更新 所以不能引用上面的数据 要重新获取一次数据库数据才叫更新
        IndexService.wishwall(this.CurrentPageIndex)
          .then((response) => {
            if (response.code === ERR_OK) {
              this.wish = response.data
              this.CurrentPageIndex += 1 // 页面+1
            }
          })
          .catch((err) => {
            console.log(err)
          })
      },
      ajaxdate(){

        if(!this.postsuccess){
          return
        }
        let  noneData = document.querySelector(".noneData");
        if(this.noneDataNum==1){
          noneData.style.display = "block" //没有更多数据了
          setTimeout(function(){
            noneData.style.display = "none"
          },1000)
          return
        }
        this.postsuccess=false
        this.loading_show = true
        IndexService.wishwall(this.CurrentPageIndex,'fc3825e6-b05c-486e-8ac0-a1212949d001','oHSNYwK0DNBLRf6ts3qbzzedILDQ','2')
          .then((response) => {
            let _this =this
            setTimeout(function(){
              _this.loading_show = false
            },500)
            if (response.code === ERR_OK) {
              this.postsuccess=true
              if(response.data.length){
                for(let i=0;i<response.data.length;i++){
                  this.lists.push(response.data[i])
                }
                this.CurrentPageIndex += 1 // 页面+1
                this.scrollY = this.contScroll.startY;
              }else{
                noneData.style.display = "block"
                setTimeout(function(){
                  noneData.style.display = "none"
                },1000)
                this.noneDataNum = 1;
                return;
              }
            }
          })
          .catch((err) => {
            console.log(err)
          })},
      is_weixin(){
        let ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
          this.weixinStatus = true;
          let code = this.GetQueryString('code')
          if(code!=null && code!=undefined){
            IndexService.getuserinfo(code)
              .then((recvdata)=>{
                if(recvdata.code==200){
                  this.nickName = recvdata.data.nickName
                  this.headImgUrl = recvdata.data.headImgUrl
                  this.userId = recvdata.data.openId
                }
              })
          }else{
            var link = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx49b89597e8b4f7a8"+"&redirect_uri="+window.location.href +"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
            window.location.href = link;
          }
        } else {
          this.weixinStatus = false;
        }
      },
      GetQueryString(name){
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        var r = window.location.search.substr(1).match(reg);
        if(r != null) return unescape(r[2])
        return null
      },
      changeHeart (index) {
        this.lists[index].heartNum = !this.lists[index].heartNum
        let data={}
        if (this.lists[index].heartNum) {
          this.lists[index].praiseNum ++
          if(this.weixinStatus){
            data={
              id:this.lists[index].id,
              channel:2,
              headUrl:this.headUrl,
              nickName:this.nickName,
            }
          }else{
            data={
              id:this.lists[index].id,
              userId:this.GetQueryString('userId'),
              channel:1,
            }
          }
          IndexService.praise(data)
            .then((recvdata)=>{

            })
        } else if (!this.lists[index].heartNum) {
          this.lists[index].praiseNum --
          if(this.weixinStatus){
            data={
              id:this.lists[index].id,
              channel:2,
              headUrl:this.headUrl,
              nickName:this.nickName,
            }
          }else{
            data={
              id:this.lists[index].id,
              userId:this.GetQueryString('userId'),
              channel:1,
            }
          }
          IndexService.praise(data)
            .then((recvdata)=>{

            })
        }
        this.$set(this.lists)
      }
      ,
      pubWish () {
        this.$router.push({path: '/pubWish'})
      },
      showRules () {
        this.rulesShow = true
        console.log(this.rulesShow)
      },
      hideRules () {
        this.rulesShow = false
      },
      down () {
        this.$refs.scroll.addEventListener({
          name: 'scrolltobottom',
          extra: {
            threshold: 0 // 设置距离底部多少距离时触发，默认为0
          }
        })
      }
    },
    components: {
      'v-scroll': Scroll
    }
  }
</script>
