<style lang="stylus"scoped>
  @import '../../assets/styl/rem.styl'
  .page5
    width 100%
    height 100%
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
        color #f8cb0c
        flex-direction column
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
        flex-direction column
        color #f8cb0c
        .bigHeart
          width rem(118)
        p
          font-size rem(30)
          margin-top rem(20)
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
<style scoped>
.tost{
  	position: absolute;
  	top: 40%;
  	color: #F8CB0C;
  	font-size: 25px;
  	opacity: 0;

  	transform: translateX(-50%);
  	-webkit-transform: translateX(-50%);
  	left:-100%;
  	transition:all  linear 1s ;
  	-webkit-transition: all  linear 1s ;
  }
</style>
<template>
  <div class="page5">
    <div class="tost">qweqw</div>
    <header class="headPage5">
      <h3 class="headH3">您的小伙伴{{wish.nickname}}正在参与写心愿送机票的活动快来帮他点赞</h3>
    </header>
    <div class="contentPage5">
      <div class="page5List">
        <div class="listHead">
          <img :src="wish.headUrl" alt="用户头像" class="wishImg">
          <h3 class="wishName">{{wish.nickname}}</h3>
          <p class="wishTime">{{wish.time | moment}}</p>
        </div>
        <div class="listContainer">
          {{wish.wish}}
        </div>
      </div>
      <div class="page5Heart" @click='clickGood()'>
        <img src="./爱心-拷贝-4.png" class="bigHeart">
        <p class="heartNum">{{wish.praiseNum}}</p>
      </div>
    </div>
    <footer class="footPage5">
      <div class="btnPage5">
        <button class="btnLeft" @click="toIndex">我也要参加</button>
        <button class="btnRight" @click="toIndex">返回首页</button>
      </div>
      <div class="page5ma">
        <p>扫描二维码，下载皮皮虾旅行哦</p>
        <img src="./二维码.png" alt="">
      </div>
    </footer>
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
        id:'',
        weixinStatus:false,
        nickName:'',
        headImgUrl:'',
        userId:''
      }
    },
    created () {
      this.id=this.$route.params.id
      // 设置一个开关来避免重负请求数据
      this.loadData()
      /*axios.post('http://101.251.240.134:8080/wish/api/v1/praise', {
        id: '',
        userId: '',
        channel: '2'
      })
        .then((response) => {
          if (response.data.code === ERR_OK) {
            console.log(response.id)
          }
        })*/
    },
    methods: {
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
      loadData(){
          axios.get('http://101.251.240.134:8080/wish/api/v1/wish/'+this.id)
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
    	//点赞通道
    	clickGood(){
    		//调用后台接口获取打开链接的OpenID，然后记录，此人已经为这个用户点赞过了，避免同一个人重复点赞
    		//然后只要这个人的点赞字段+1就行了
        var tost = document.getElementsByClassName("tost")[0];
    		if(this.weixinStatus){
          let data ={
              channel:2,
              headUrl:this.headImgUrl,
              nickName:this.nickName,
              id:this.id
            }
            IndexService.praise(data)
            .then((recvdata)=>{
                if(recvdata.code==200){
                    this.loadData()
                    tost.innerText="点赞成功";
                    tost.style.opacity = 1;
                    tost.style.left = "50%";
                    this.timerLeave();
                    return false;
                }else{
                    tost.innerText=recvdata.msg;
                    tost.style.opacity = 1;
                    tost.style.left = "50%";
                    this.timerLeave();
                    return false;
                }
              })
        }else{
          let userid = this.GetQueryString('userId')
          let data ={
              channel:1,
              userId:userid,
              id:this.id
            }
            IndexService.praise(data)
            .then((recvdata)=>{
                if(recvdata.code==200){
                    this.loadData()
                    tost.innerText="点赞成功";
                    tost.style.opacity = 1;
                    tost.style.left = "50%";
                    this.timerLeave();
                    return false;
                }else{
                    tost.innerText=recvdata.msg;
                    tost.style.opacity = 1;
                    tost.style.left = "50%";
                    this.timerLeave();
                    return false;
                }
              })
        }
    	}
    	,
      toIndex () {
        this.$router.push({path: '/'})
      },
      timerLeave(){
        setTimeout(()=>{
          this.leaveTost();
        },3000)
      },
      leaveTost(){
    		var tost = document.getElementsByClassName("tost")[0];
        tost.style.opacity = 0;
        tost.style.left = "-100%";
      }
    }
  }
</script>

