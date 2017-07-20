<style lang="stylus" scoped>
  @import '../../assets/styl/rem.styl'
  .page2{
    width: 100%;
    background: url("./page2_bg.png") no-repeat center;
    background-size: 100% 100%;
    text-align: center;
    height: rem(1334);
    overflow: hidden;
    position: relative;
  }
  .page2 >div:nth-child(1) img{
    position: absolute;
    top: 0;
    left: 0;
    width: rem(529);
    animation: start 1.5s ease-out infinite;
  }
  .page2 >div:nth-child(1){
    width: rem(547);
    height: rem(457);
    background: url("./page2_box.png") no-repeat center;
    background-size: 100% 100%;
    font-size: rem(41);
    color: #5e2900;
    padding: rem(90) 0;
    animation: fadeInUp 0.6s ease-in;
    position: absolute;
    top: rem(131);
    left: 0;
    margin: 0 rem(100);
  }
  .page2 >div:nth-child(1) p{
    display: none;
  }
  .page2Lamp{
    width: rem(343);
    height: rem(243);
    background: url("./page2_lamp.png") no-repeat center;
    background-size: 100% 100%;
    margin: rem(547) 0 0 rem(165);
  }

  .page2Word{
    font-size: rem(30);
    color: #fff;
    margin-top: rem(22);
  }
  .page2Word a{
    font-size: rem(36);
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
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  .fadeIn{
    animation: fadeIn 0.4s ease 0s;
  }
</style>
<template>
  <div class="page2">
      <div id="cloud" class="cloud">
        <p class="cloud1">想去哪里？</p>
        <p class="cloud1">想跟谁去？</p>
        <p class="cloud1">皮皮虾帮你实现愿望~</p>
        <img src="./page2_start.png"/>
      </div>
      <div class="page2Lamp">

      </div>
      <div class="page2Word">
        <p>参与活动<br />点赞最高者将或者<br />专业行程规划师设计的行程</p>
        <a>免费赠送机票哦~~~</a>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    },
    mounted () {
      this.animate2()
    },
    methods: {
      animate2 () {
        let ps = document.getElementsByClassName('cloud1')
        for (let i = 0; i < ps.length; i++) {
          setTimeout(function () {
            ps[i].style.display = 'block'
            ps[i].classList.add('fadeIn')
          }, i * 500)
        }
        setTimeout(function () {
          for (var i = 0; i < ps.length; i++) {
            ps[i].classList.remove('fadeIn')
          }
        }, 1500)
      }
    }
  }

</script>

