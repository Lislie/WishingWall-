<style lang="stylus" scoped>
  @import '../../assets/styl/rem.styl'
  .page7{
    width: 100%;
    height:rem(1334);
    background: url("./背景3.png") no-repeat center;
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
    background: url("./page7_button.png") no-repeat center;
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
</style>

<template>
  <div class="page7">
    <h1>写下您的旅行愿望</h1>
    <textarea placeholder="请写下您的旅行愿望~"></textarea>
    <div class="getCode">
      <input type="tel" placeholder="请输入手机号" >
      <input type="button" value="获取验证码" readonly/>
    </div>
    <div>
      <input type="text" placeholder="请输入验证码" />
    </div>
    <button @click="postWish">提交心愿</button>
    <p class=title>活动时间</p>
    <p>2018年01月08日-2019年03月09日</p>
    <p>活动规则</p>
    <p class="page7P">1.点赞数排名第一，第二名，将获得机票+点赞数相应的积分数<br />2.点赞数排名第3~22名，将获得。。。+点赞相应的积分数<br />3.每位参与用户都将获得点赞数相应的积分数
      <br/>4.以上奖金都需要通过下载皮皮虾旅行app领取，积分将发送至报名手机号相应的皮皮虾旅行账户中。<br />5.请在活动截止后1个月内下载APP领取积分，逾期积分未领取，将视为放弃领取资格，积分失效~</p>
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
      postWish () {
        this.$router.push({path: '/postWish'})
      }
    }
  }
</script>

