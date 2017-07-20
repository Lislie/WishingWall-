<style lang="stylus" scoped>
  @import './assets/styl/rem.styl'

  #wrapper
    width 100%
    height rem(1334)
    position relative
    overflow hidden
  .btn{
    position absolute
    bottom: 0
    width rem(100)
    height rem(50)
    background-color white
  }
  .list-enter-active {
    transition: all 1s ease
    transform: translateY(0)
    opacity 1
  }

  .list-leave-active {
    transition: all 2s ease
    transform: translateY(-100%)
    opacity 0
  }

  .list-enter {
    transform: translateY(100%)
    opacity 1
  }

  .list-leave {
    transform: translateY(0)
    opacity 0
  }
</style>

<template>
  <div id="wrapper">
    <button @click="last" class="last">上一页</button>
    <transition name='list' mode="out-in">
      <componet :is="view"></componet>
    </transition>
    <button @click="next" class="next">下一页</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import Wish from './components/wish/wish.vue'
  import page1 from './components/page1/page1.vue'
  import page2 from './components/page2/page2.vue'
  import page3 from './components/page3/page3.vue'

  export default {

    data () {
      return {
        view: 'page1',
        currentIndex: 0,
        timer: '',
        timer2: '',
        flag: true
//        items: [this.$refs.page1, this.$refs.page2, this.$refs.page3, this.$refs.page4]
      }
    },
    methods: {
      next () { // 下一张
        if (this.flag) {
          if (this.view === 'page1') {
            this.flag = false
            this.clearT()
            this.view = 'page2'
            this.timeout()
          } else if (this.view === 'page2') {
            this.flag = false
            this.clearT()
            this.view = 'page3'
            this.timeout()
          } else if (this.view === 'page3') {
            this.flag = false
            this.clearT()
            this.view = 'Wish'
            this.timeout()
          }
        }
      },
      last () { // 上一张
        if (this.flag) {
          if (this.view === 'Wish') {
            this.flag = false
            this.clearT()
            this.view = 'page3'
            this.timeout()
          } else if (this.view === 'page23') {
            this.flag = false
            this.clearT()
            this.view = 'page2'
            this.timeout()
          } else if (this.view === 'page2') {
            this.flag = false
            this.clearT()
            this.view = 'page1'
            this.timeout()
          }
        }
      },
      clearT () {
        clearTimeout(this.timer)
        clearTimeout(this.timer2)
      },
      timeout () { // 运动结束后设置flag为true，并且过3秒调用next，进行下一次运动。
        this.timer = setTimeout(() => { this.flag = true }, 1050) // 运动时间是1s。
//        this.timer2 = setTimeout(() => { this.next() }, 3000)
      }
    },
    mounted () {
//      this.timer2 = setTimeout(this.next, 3000) // 刚挂载dom，就开始等待进行第一次轮播，
    },
    components: {
      'page1': page1,
      'page2': page2,
      'page3': page3,
      'Wish': Wish
    }
  }

</script>
