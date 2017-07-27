<template>
  <div class="page1">
    <img src="./logo_ppx.png" class="logo"/>
    <div class="imgs">
      <img id="lamp" src="./page1_lamp.png" />
      <img id="alading" src="./alading.png" />
      <img id="cloudSmall" src="./cloudy_small.png" />
      <img id="cloud" src="./cloud_big.png" />
    </div>
    <div class="outWords">
      <img id="word1" src="./world.gif" />
      <img id="word2" src="./wish.gif" />
      <img id="word3" src="./come.gif" />
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
      this.$nextTick(
        this.init()
      )
    },
    methods: {
      init () {
        let lamp = document.getElementById('lamp')
        let cloud = document.getElementById('cloud')
        let alading = document.getElementById('alading')
        let word1 = document.getElementById('word1')
        let word2 = document.getElementById('word2')
        let word3 = document.getElementById('word3')
        let cloudSmall = document.getElementById('cloudSmall')
        lamp.classList.add('shake')
        lamp.style.animationIterationCount=2
        setTimeout(function(){
          lamp.classList.remove('shake')
          cloudSmall.style.display = 'block'
          cloudSmall.classList.add('fadeIn1')
        },800)
        /*setTimeout(function(){
         /!*lamp.classList.add('shake')
         lamp.style.animationIterationCount=1*!/
         },1800)*/
        setTimeout(function(){
          /*lamp.classList.remove('shake')*/
          cloud.style.display = 'block'
          cloud.classList.add('fadeIn2')
        },1800)
        setTimeout(function(){
          /*lamp.classList.add('shake')
           lamp.style.animationIterationCount=1*/
          cloud.setAttribute('class','fadeOut')
          /*alading.style.display = 'block'*/
          /*alading.classList.add('scaleBig')*/
        },2800)
        setTimeout(function(){
          cloud.style.display = 'none'
          alading.style.display = 'block'
          alading.classList.add('scaleBig')
        },4300)
        setTimeout(function(){
          alading.classList.remove('scaleBig')
          alading.classList.add('float')
        },7500)
        setTimeout(function(){
          word3.style.display = 'block'
          word3.classList.add('fadeInUp')
          setTimeout(function(){
            word2.style.display = 'block'
            word2.classList.add('fadeInUp')
          },400)
          setTimeout(function(){
            word1.style.display = 'block'
            word1.classList.add('fadeInUp')
          },800)
        },5500)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/styl/rem.styl'
  .page1{
    width: 100%
    background: url("./page1_bg.png") no-repeat center
    background-size: 100% 100%
    text-align: center
    height rem(1334)
    overflow: hidden
    position: relative
  }
  .page1 > div:nth-child(2){
    margin-top: rem(757)
    position: relative
  }
  .logo{
    width: rem(130)
    height: rem(116)
    margin-top: rem(30)
    margin-right: rem(500)
  }
  .page1 >div:nth-child(2) >img:nth-child(1){
    width: rem(104)
    height: rem(62)
    margin: 0 auto
  }
  .page1 >div:nth-child(2) >img:nth-child(2){
    width: rem(310)
    height: rem(481)
    position: absolute
    left: rem(77)
    top: rem(-440)
    display: none
  }
  .page1 >div:nth-child(2) >img:nth-child(3){
    width: rem(82)
    height: rem(51)
    position: absolute
    left: 50%
    bottom: rem(-15)
    margin-left: rem(-120)
    display: none
  }
  .page1 >div:nth-child(2) >img:nth-child(4){
    width: rem(408)
    height: rem(788)
    position: absolute
    left: rem(-6)
    top: rem(-446)
    display: none
  }
  .outWords{
    width: rem(384)
    color: #ffe706
    position: absolute
    top: rem(337)
    right: rem(22)
    transform: rotate(30deg)
  }
  .outWords img{
    /*position: absolute */
    width: rem(265)
    height: rem(68)
    display: none
    position: absolute
    animation-fill-mode: forwards
    top: rem(112)
    left: rem(60)
  }
  .outWords img:nth-child(1){
    width: rem(459)
    height: rem(129)
    margin-left: rem(-90)
    top: rem(-15)
  }
  .outWords img:nth-child(3){
    height: rem(71)
    top: rem(180)
  }
  .shake{
    animation: shake 0.5s ease 0s
    /* animation-iteration-count:2 */
  }
  .fadeInUp{
    animation: fadeInUp 0.5s ease-out
  }





  @-webkit-keyframes shake {
    from, to {
      -webkit-transform: translate3d(0, 0, 0)
      transform: translate3d(0, 0, 0)
    }

    10%, 30%, 50%, 70%, 90% {
      -webkit-transform: translate3d(-5px, 0, 0)
      transform: translate3d(-5px, 0, 0)
    }

    20%, 40%, 60%, 80% {
      -webkit-transform: translate3d(5px, 0, 0)
      transform: translate3d(5px, 0, 0)
    }
  }

  @keyframes shake {
    from, to {
      -webkit-transform: translate3d(0, 0, 0)
      transform: translate3d(0, 0, 0)
    }

    10%, 30%, 50%, 70%, 90% {
      -webkit-transform: translate3d(-5px, 0, 0)
      transform: translate3d(-5px, 0, 0)
    }

    20%, 40%, 60%, 80% {
      -webkit-transform: translate3d(5px, 0, 0)
      transform: translate3d(5px, 0, 0)
    }
  }

  @keyframes ghostUpdown{
    from,to{transform: translate3d(0,0,0)}
    15%{transform: translate3d(-6px,-6px,0)}
    45%{transform: translate3d(6px,-12px,0)}
    75%{transform: translate3d(-6px,-12px,0)}
    90%{transform: translate3d(6px,-6px,0)}
    /*80%{transform: translate3d(0px,-5px,0)}*/

  }
  @-webkit-keyframes ghostUpdown{
    from,to{transform: translate3d(0,0,0)}

  }
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0
    }

    to {
      opacity: 1
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0
    }
    to {
      opacity: 1
    }
  }
  @-webkit-keyframes fadeOut {
    from {
      opacity: 1
    }

    to {
      opacity: 0
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1
    }

    to {
      opacity: 0
    }
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0
      -webkit-transform: translate3d(0, 100%, 0)
      transform: translate3d(0, 100%, 0)
    }

    to {
      opacity: 1
      -webkit-transform: none
      transform: none
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0
      -webkit-transform: translate3d(0, 100%, 0)
      transform: translate3d(0, 100%, 0)
    }

    to {
      opacity: 1
      -webkit-transform: none
      transform: none
    }
  }
  @-webkit-keyframes scaleSmall {
    from {
      opacity: 1
      -webkit-transform: scale(1.0,1.0)
      transform: scale(1.0,1.0)
      transform-origin: 80% 60%
    }

    to {
      opacity: 0
      -webkit-transform: scale(0,0)
      transform: scale(0,0)
      transform-origin: 80% 60%
    }
  }
  @keyframes scaleSmall {
    from {
      opacity: 1
      -webkit-transform: scale(1.0,1.0)
      transform: scale(1.0,1.0)
      -webkit-transform-origin: 80% 95%
      transform-origin: 80% 60%
    }

    to {
      opacity: 0
      -webkit-transform: scale(0,0)
      transform: scale(0,0)
      -webkit-transform-origin: 80% 60%
      transform-origin: 80% 60%
    }
  }
  @-webkit-keyframes scaleBig {

    from {
      opacity: 0
      -webkit-transform: scale(0,0)
      transform: scale(0,0)
      -webkit-transform-origin: 80% 95%
      transform-origin: 80% 95%
    }
    to {
      opacity: 1
      -webkit-transform: scale(1.0,1.0)
      transform: scale(1.0,1.0)
      -webkit-transform-origin: 80% 95%
      transform-origin: 80% 95%
    }
  }
  @keyframes scaleBig {

    from {
      opacity: 0
      -webkit-transform: scale(0,0)
      transform: scale(0,0)
      transform-origin: 80% 95%
    }
    to {
      opacity: 1
      -webkit-transform: scale(1.0,1.0)
      transform: scale(1.0,1.0)
      transform-origin: 80% 95%
    }
  }
  .fadeIn1{
    animation: fadeIn 1s
  }
  .fadeOut{
    animation: fadeOut 1.5s ease-in
  }
  .fadeIn2{
    animation: fadeIn 2s
  }
  .fadeIn3{
    animation: fadeIn 4s ease-out
  }
  .float{
    animation: ghostUpdown 4s linear infinite
  }
  .scaleSmall{
    animation: scaleSmall 2s
  }
  .scaleBig{
    animation: scaleBig 2.5s
  }

</style>
