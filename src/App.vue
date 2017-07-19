<template>
  <div id="app">
    <page1></page1>
    <page2></page2>
    <page3></page3>
    <Wish :wish="wish"></Wish>
    <page4></page4>
    <page5></page5>
    <page6></page6>
  </div>
</template>

<script>
  import Wish from './components/wish/wish.vue'
  import page1 from './components/page1/page1.vue'
  import page2 from './components/page2/page2.vue'
  import page3 from './components/page3/page3.vue'
  import page5 from './components/page5/page5.vue'
  import page4 from './components/page4/page4.vue'
  import page6 from './components/page6/page6.vue'
  import Vue from 'vue'
  import moment from 'moment'

  Vue.filter('moment', function (value, formatString) {
    formatString = formatString || 'YYYY年MM月DD日 HH:mm:ss'
    return moment(value).format(formatString)
  })
  export default {
    data () {
      return {
        wish: [],
        value1: 0
      }
    },
    components: {
      Wish,
      page1,
      page2,
      page5,
      page4,
      page6,
      page3
    }
  }
</script>

<style lang="stylus" scoped>
  @import './assets/styl/rem.styl'
    #app
      font-family 'MFYueYuan_Noncommercial-Regular', Helvetica, Arial, sans-serif
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      text-align center
      color #2c3e50
      width 100%
      height rem(1334)
</style>
