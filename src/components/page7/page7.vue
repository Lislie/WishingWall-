<style lang="stylus" scoped>
  @import '../../assets/styl/rem.styl'
  .page7{
    width: 100%;
    height:rem(1334);
    background: url("http://img.ppx.easyto.com/images/wish/page7/背景3.png") no-repeat center;
    background-size: 100% 100%;
    padding: rem(20) rem(32) rem(32);
    overflow: hidden;
  }
  h1{
    color: #fff;
    text-align: center;
    font-size: rem(50);
    font-weight: normal;
    line-height: rem(134);
  }
  textarea{
    display: block;
    width: rem(686);
    height: rem(280);
    margin: 0 auto;
    padding: rem(40) rem(44);
  }
  .page7 textarea,.page7 input{
    background: #007196;
    border-radius: rem(20);
    font-size: rem(30);
    color: #fff;
    outline: none;
    border: none;
  }
  textarea::-webkit-input-placeholder{
    color: rgba(255,255,255,0.5);
  }
  textarea::-webkit-input-placeholder{
    color: rgba(255,255,255,0.5);
  }
  input::-webkit-input-placeholder{
    color: rgba(255,255,255,0.5);
  }
  input::-webkit-input-placeholder{
    color: rgba(255,255,255,0.5);
  }
  .getCode{
    overflow: hidden;
  }
  .getCode input{
    display: inline-block;
    float: left;
  }
  .page7 div{
    width: rem(686);
    height: rem(98);
    margin: 0 auto;
    margin-top: rem(24);
  }
  input{
    height: rem(98);
    padding: 0 rem(44);
    line-height: rem(98);
  }
  input[type='tel']{
    margin-right: rem(14);
    width: rem(450);
  }
  input[type='button']{
    padding: 0;
    width: rem(220);
  }
  input[type='text']{
    width: rem(686);
  }
  button{
    display: block;
    width: rem(256);
    height: rem(118);
    margin: 0 auto;
    background: url("http://img.ppx.easyto.com/images/wish/page7/page7_button.png") no-repeat center;
    background-size: 100% 100%;
    color: #fff;
    font-size: rem(30);
    text-shadow: rem(4) rem(4)  rem(5) #653504;
    line-height: rem(118);
    text-align: left;
    padding-left: rem(48);
    outline: none;
    border: none;
    margin-top: rem(60);
  }
  p{
    font-size: rem(24);
    line-height: rem(36);
    padding: 0 rem(18);
    color: #fff;
  }
  .title{
    padding: rem(30) rem(18) 0;
  }
  .page7P{
    text-align left
  }
  .btnCode{

  }
  .tost{
    position: absolute;
    top: 40%;
    color: #F8CB0C;
    font-size: 25px;
    opacity: 0;
    width: 100%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    left:-100%;
    transition:all  linear 1s ;
    -webkit-transition: all  linear 1s ;
  }

</style>

<template>
  <div class="page7">
  	<div class="tost"></div>
    <h1>写下您的旅行愿望</h1>
    <textarea placeholder="请写下您的旅行愿望~" v-model="wishText" v-on:blur="checkWish" id="getFocus"></textarea>
    <div class="getCode">
      <input type="tel" placeholder="请输入手机号"  v-model="phoneText" >
      <input type="button" value="获取验证码"  @click="getCode" class="btnCode"  />
    </div>
    <div>
      <input type="text" placeholder="请输入验证码"  v-model="phoneCode" />
    </div>
    <button @click="postWish">提交心愿</button>
    <p class=title>活动时间</p>
    <p>2018年01月08日-2019年03月09日</p>
    <p>活动规则</p>
    <p class="page7P">1.点赞数排名第一，第二名，将获得机票+点赞数相应的积分数<br />2.点赞数排名第3~22名，将获得。。。+点赞相应的积分数<br />3.每位参与用户都将获得点赞数相应的积分数
      <br/>4.以上奖金都需要通过下载皮皮虾旅行app领取，积分将发送至报名手机号相应的皮皮虾旅行账户中。<br />5.请在活动截止后1个月内下载APP领取积分，逾期积分未领取，将视为放弃领取资格，积分失效~</p>
  </div>

</template>
	<script>
  import axios from 'axios'
  import IndexService from '../../services/indexService'
  axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';
  const ERR_OK = 200
  export default {
    data () {
      return {
        wish: {},
        rulesShow: false,
        codePhone:null,
        phoneText:'',
        phoneCode:"",
        wishText:"",
        isDisabled:false,
        weixinStatus:false,
        nickName:'',
        headImgUrl:'',
        userId:''
      }
    },
    mounted () {

    },
    created () {
        this.is_weixin()

    },
    methods: {
       getName(qr){
        $.ajax({
          type: "GET",
          url: "http://101.251.240.134:8080/wish/api/v1/weichatUserInfo",
          data: {
            code: qr,
          },
          success: function (data) {
            if (data.code == 200) {
              console.log(data);
              alert(data);
              this.headImgUrl = data.data.headImgUrl;
              this.nickName = data.data.nickName;
              this.userId = data.data.openId;
            }
          }
        });
       },
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
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if ( r !== null ){
          return unescape(r[2]);
        }else {
          return null;
        }
      },
      postWish () {
        let _this = this;
        let tost = document.getElementsByClassName("tost")[0];
        //判断心愿不能为空

        if(this.wishText.length<15){
          this.enterTost("心愿不能少于15字哦",3000)
          setTimeout(function(){
            let getFocus = document.getElementById("getFocus");
            getFocus.focus();
          },3000);
          return false;
        }
//    	//判断手机号码不能为空
        if(this.phoneText==""){

          _this.enterTost("请输入手机号",2000);
          return false;
        }
//    	//验证手机号是否正确
        if(!(/^1[34578]\d{9}$/.test(this.phoneText))){
          _this.enterTost("请输入正确的手机号码",2000);

          return false;

        }
        if(!(/^\d{6}$/.test(this.phoneCode))){
          _this.enterTost("验证码为6位数字",2000);
          return false;
        }

    //if(!( this.phoneText==手机短信验证码对应的手机号&&this.phoneCode==对应的验证码)){ //这2个数据是数据库请求回来的
    	//alert("验证码不正确！");
    	//return false;
   // }

   	 //如果上面条件都满足 则添加到数据库

   	  //获取接口返回的用户ID，然后传到postWish里获取数据就行了
        let data={
          mobile:'86,'+this.phoneText,
          chkNum:this.phoneCode
        }
        IndexService.checkNum(data)
        .then((recvdata)=>{
      	   console.log(recvdata)
          if(recvdata.code==200){
            if(this.weixinStatus){
              let datasave = {
                wish:this.wishText,
                mobile:'86,'+this.phoneText,
                nickName:this.nickName,
                headUrl:this.headImgUrl,
                channel:'2',
                userId:'oHSNYwK0DNBLRf6ts3qbzzedILDQ'
              }
              console.log('weixin')
              IndexService.sendWish(datasave)
              .then((recvdataweixin)=>{
                if(recvdataweixin.code == 200){
                  this.$router.push({path: '/postWish/'+recvdataweixin.data.wid})
                }else if(recvdataweixin.code == 405) {
                  this.$router.push({path: '/already/'+recvdataweixin.data.wid})
                }else {
                    tost.innerText=recvdataweixin.msg;
                    tost.style.opacity = 1;
                    tost.style.left = "50%";
                    this.timerLeave();
                  }
              })
            }else{
              console.log('ppx')
                let datasave = {
                  userId:'ev2gagbvibnkamhjoxdnjf',
                  wish:this.wishText,
                  mobile:'86,'+this.phoneText,
                  channel:'1',
                }
              IndexService.sendWish(datasave)
              .then((recvdatapppx)=>{
                if(recvdatapppx.code == 200){
                  this.$router.push({path: '/postWish/'+recvdatapppx.data.wid})
                } else if(recvdatapppx.code == 405) {
                  this.$router.push({path: '/already/' + recvdatapppx.data.wid})
                } else {
                    tost.innerText=recvdatapppx.msg;
                    tost.style.opacity = 1;
                    tost.style.left = "50%";
                    this.timerLeave();
                }
              })
            }

          }else{
            tost.innerText=recvdata.msg;
            tost.style.opacity = 1;
            tost.style.left = "50%";
            this.timerLeave();
          }
        })

    },
    leaveTost(){
    		let tost = document.getElementsByClassName("tost")[0];
    	tost.style.opacity = 0;
    	tost.style.left = "-100%";


    },
    getCode(){

      let _this = this;

      let btnCode = document.getElementsByClassName("btnCode")[0];
      if(this.phoneText.length<=0){

        _this.enterTost("请输入手机号",2000);
        return false;
      }

      if(!(/^1[34578]\d{9}$/.test(this.phoneText))){
        _this.enterTost("请输入正确的手机号");
        return false;
      }
      let tost = document.getElementsByClassName("tost")[0];
      IndexService.sendcode('86,'+this.phoneText)
      .then((recvdata)=>{
        console.log(recvdata)
        if(recvdata.code==200){
          tost.innerText="发送成功";
          tost.style.opacity = 1;
          tost.style.left = "50%";
          this.timerLeave();
          btnCode.setAttribute("disabled","true")
          let _num = 30;
          //访问数据库接口,并且把手机号 和验证码上传到数据库
          let calcNum = setInterval(function(){
            if(_num<=-1){
              clearInterval(calcNum);
              btnCode.value="获取验证码";
              btnCode.removeAttribute("disabled")
              return ;
            }
              btnCode.value="获取验证码("+_num+")";
              _num--;
          },1000);
        }else{
            tost.innerText=recvdata.msg;
            tost.style.opacity = 1;
            tost.style.left = "50%";
            this.timerLeave();
        }
      })
    },
      checkWish(){
        if(this.wishText.length<15){
          this.enterTost("心愿不能少于15字以上哦",3000)
          setTimeout(function(){
            let getFocus = document.getElementById("getFocus");
            getFocus.focus();
          },3000);
          return 0;
        }
      },
      leaveTost(){
        let tost = document.getElementsByClassName("tost")[0];
        if(tost){
          tost.style.opacity = 0;
          tost.style.left = "-100%";
        }

      },
      enterTost(text,timer){
        let tost = document.getElementsByClassName("tost")[0];
        if(tost){
          tost.innerText=text;
          tost.style.opacity = 1;
          tost.style.left = "50%";
          setTimeout(()=>{
            this.leaveTost();
          },timer||3000)
        }
      }
      ,
    timerLeave(){
    	setTimeout(()=>{
    		this.leaveTost();
    	},3000)
    }

    }
  }
</script>

