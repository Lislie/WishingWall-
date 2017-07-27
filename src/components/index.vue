<template>
  <div class="swiper-container " id="app1">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <page1></page1>
      </div>
      <div class="swiper-slide">
        <page2></page2>
      </div>
      <div class="swiper-slide">
        <page3></page3>
      </div>
      <div class="swiper-slide">
        <wish ></wish>
      </div>

    </div>
    <button @click="prev" class="upBtn"></button>
    <button @click="next" class="downBtn"></button>
  </div>
</template>
<script>
  import page1 from './page1/page1.vue'
  import page2 from './page2/page2.vue'
  import page3 from './page3/page3.vue'
  import wish from './wish/wish.vue'
  export default {
    components: {
      page1,
      page2,
      page3,
      wish
    },
    data(){
      return{
        mySwiper:null
      }
    },
    mounted() {
      this.Init()
    },
    methods: {
      next(){
        this.mySwiper.slideNext();
      },
      prev(){
        this.mySwiper.slidePrev();
      },
      Init() {
        this.mySwiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          loop: false,
          allowSwipeToPrev: false,
          // effect : 'cube',
          cube: {
            slideShadows: false,
            shadow: false
          },
          onSlideChangeEnd: function (swiper) {
            this. resetAmation()
            if(swiper.activeIndex>0){
              $('.upBtn').show()
              this.allowSwipeToPrev = true
            }else{
              $('.upBtn').hide()
              this.allowSwipeToPrev = false
            }
            if(swiper.activeIndex>=3){
              $('.downBtn').hide()
              this.allowSwipeToNext = false
            }else{
              $('.downBtn').show()
              this.allowSwipeToNext = true
            }
            switch (swiper.activeIndex) {
              case 0:
                this.page1Anmation()
                break;
              case 1:
                $('.cloud').addClass('animate_pg2').show()
                for (let i = 0; i < $('.cloud1').length; i++) {
                  setTimeout(function () {
                    $('.cloud1').eq(i).css("display","block")
                    $('.cloud1').eq(i).addClass('fadeIn')
                  }, i * 500)
                }
                break;
              case 2:
                $('.carpet').addClass('animate_pg3').show()
                $('#photo').addClass('flipY').show()
                break;
              case 3:

                break;
              default:
                break;
            }
          },
          resetAmation(){
            $('#word3,#word1,#word2').removeClass('fadeInUp').hide()
            $("#lamp").removeClass('shake').hide()
            $("#cloud,#cloudSmall").removeClass('fadeIn1 fadeOut').hide()
            $("#alading").removeClass("fadeIn3 float").hide()
            $('.carpet').hide()
            $('#photo').removeClass('flipY')
            $('.cloud1').removeClass('fadeIn').hide()
            $('.cloud').removeClass('animate_pg2 ')
          },
          page1Anmation(){
            $("#lamp").addClass('shake').show()
            setTimeout(function () {
              $("#cloudSmall").addClass('fadeIn1').show()
            }, 800)
            setTimeout(function () {
              $("#lamp").addClass('shake').show()
            }, 1800)
            setTimeout(function () {
              $("#lamp").removeClass('shake')
              $("#cloud").addClass('fadeIn1').show()
            }, 2600)
            setTimeout(function () {
              $("#lamp").removeClass('shake')
              $("#lamp").addClass('shake')
              $("#cloud").addClass('fadeOut')
              $("#alading").addClass('fadeIn3').show()
            }, 3600)
            setTimeout(function () {
              $("#cloud").hide()

            }, 5600)
            setTimeout(function () {
              $("#alading").addClass('float')
            }, 5000)
            setTimeout(function () {
              $('#word3').addClass('fadeInUp').show()
              setTimeout(function () {
                $('#word2').addClass('fadeInUp').show()
              }, 400)
              setTimeout(function () {
                $('#word1').addClass('fadeInUp').show()
              }, 800)
            }, 5500)
          }
        })
      }
    }
  }

</script>
<style>
  .animate_pg3{
    animation: carpet 1.5s linear infinite;
    animation-direction:alternate;
  }
  .animate_pg2{
    animation: fadeInUp 1.5s ease-out;
  }
  .fadeIn{
    animation: fadeIn 0.4s ease 0s;
  }
  .flipY{
    animation: flipY 2s ease-in-out;
  }
  .downBtn {
    width: 1.46rem;
    height: 0.75rem;
    position: absolute;
    left: 50%;
    bottom: 0.01rem;
    margin-left: -0.73rem;
    background: url(../assets/img/down.png) no-repeat center;

    background-size: 100% 100%;
    z-index: 99;
    animation: fadeInUp 2s ease 0s infinite;
  }
  .upBtn {
    display: none;
    width: 1.46rem;
    height: 0.75rem;
    position: absolute;
    transform: rotate(180deg);
    left: 50%;
    top: 0.01rem;
    margin-left: -0.73rem;
    background: url(../assets/img/up.png) no-repeat center;
    background-size: 100% 100%;
    z-index: 99;
    animation: fadeInUp 2s ease 0s infinite;
  }
</style>
<style lang="stylus" scoped>
  @import '../assets/styl/rem.styl'
  #app1
    font-family 'MFYueYuan_Noncommercial-Regular', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #2c3e50
    width 100%
    height 100%
</style>
