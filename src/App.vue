<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
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
