<style lang="css" rel="stylesheet/css">
  .page2{
    width: 100%;

    background: url("page2_bg.png") no-repeat center;
    background-size: 100% 100%;
    text-align: center;
    overflow: hidden;
    position: relative;
  }
  .page2 >div:nth-child(1) img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    animation: start 1.5s ease-out infinite;
  }
  .page2 >div:nth-child(1){
    width: 7.3rem;
    height: 6.1rem;
    background: url("page2_box.png") no-repeat center;
    background-size: 100% 100%;
    font-size: 0.54rem;
    color: #5e2900;
    padding: 1.2rem 0;
    animation: fadeInUp 0.6s ease-in;
    position: absolute;
    top: 1.72rem;
    left: 50%;
    margin-left: -3.65rem;
  }
  .page2 >div:nth-child(1) p{
    display: none;
  }
  .page2Lamp{
    width: 4.573rem;
    height: 2.973rem;
    background: url("page2_lamp.png") no-repeat center;
    background-size: 100% 100%;
    margin: 7.29rem 0 0 2.2rem;
  }

  .page2Word{
    font-size: 0.4rem;
    color: #fff;
    margin-top: 0.29rem;
  }
  .page2Word a{
    font-size: 0.48rem;
    color: #f8cb0c;
  }
  @keyframes start {
    0%{opacity: 0.1}
    50%{opacity: 1}
    100%{opacity: 0.1}
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 20%, 0);
      transform: translate3d(0, 20%, 0);

    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;

    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 20%, 0);
      transform: translate3d(0, 20%, 0);

    }
    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;

    }
  }
</style>
<template>
  <div>
    <div class="page2" >
      <div class=cloud" id="cloud">
        <p ref="page2">想去哪里？</p>
        <p ref="page2">想跟谁去？</p>
        <p ref="page2">皮皮虾帮你实现愿望~</p>
        <img src="img/page2_start.png" />
      </div>
      <div class="page2Lamp"></div>
      <div class="page2Word">
        <p>参与活动<br />点赞最高者将或者<br />专业行程规划师设计的行程</p>
        <a>免费赠送机票哦~~~</a>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">

  export default {}

</script>

