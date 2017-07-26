<style lang="stylus" scoped>
  @import '../../assets/styl/rem.styl'
  .page3{
    width: 100%;
    height: rem(1334)
    color: #f8cb0c;
    text-align: center;
    background: url("page3_bg.png") no-repeat center;
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
    p:first-child{
      font-size: rem(47);
      margin-top: rem(122);
    }
    .brief,h1{
      font-size: rem(30);
      padding: 0 rem(120);
      text-align: left;
      line-height: rem(46);
      z-index: 10;
    }
    .photo{
      width: rem(303);
      height: rem(399);
      background: url("page3_box.png") no-repeat center;
      background-size: 100% 100%;
      margin: 0 auto;
      margin-top: rem(54);
      position: relative;
      overflow: hidden;
    }
    #photo {
      width: rem(261)
      height rem(356)
      position: absolute
      left: rem(20)
      top: rem(20)
    }
    .carpet{
      width: rem(709);
      height: rem(150);
      margin: 0 auto;
      /*margin-top: 10px;*/
      overflow:hidden;
      position: relative;
      img:nth-child(1){
        position: absolute;
        width: 100%;
        top: rem(20);
        left: 0;
        z-index: 1;
       
      }
     
      img:nth-child(2){
        width:66%;
        height:auto;
        left: 17%;
        top:rem(56);
        z-index: 5;
        position: absolute;
      }
    }
    
    h1{
      font-weight: normal;
      margin-top: rem(53);
    }
    .bottom{
      width: 70%;
      height: 29.5%;
      position: absolute;
      bottom: 0;
      left: 15%;
      background: url("page3_bottom.png") no-repeat center;
      background-size: 100% 100%;
      z-index: 0;
    }

    @keyframes  carpet{
      0%{transform: translate3d(0,0px,0)}
      100%{transform: translate3d(0px,10px,0)}

    }
    @-webkit-keyframes flipY{
      from{-webkit-transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 0deg);}
      to{
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 1800deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 1800deg);
      }
    }
    @keyframes flipY {
      from{-webkit-transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 0deg);}
      to{
        -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 1800deg);
        transform: perspective(400px) rotate3d(0, 1, 0, 1800deg);
      }
    }

    @-webkit-keyframes bounce_Out {

      from {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);

      }

      to {
        opacity: 1;
        -webkit-transform: scale3d(1.0, 1.0, 1.0);
        transform: scale3d(1.0, 1.0, 1.0);
      }
    }

    @keyframes bounce_Out {
      from {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);

      }

      to {
        opacity: 1;
        -webkit-transform: scale3d(1.0, 1.0, 1.0);
        transform: scale3d(1.0, 1.0, 1.0);
      }
    }
  }




</style>

<template>
  <div class="page3">
    <p>国际知名行程规划师<br />为您量身定制行程</p>
    <div class="photo">
      <img id="photo" src="./page3_photo.png">
    </div>
    <div class="carpet">
      <img id="carpetImg" src="./page3_carpet.png" />
      <img src="./page3_shadow.png" />
    </div>
    <h1>薛峰</h1>
    <p class="brief">旅日十年，资深背包客，旅游定制专家，PADI的潜水教练、滑雪教练，想来段不一样的旅行吗？快来许愿吧！</p>
    <div class="bottom"></div>
  </div>

</template>
