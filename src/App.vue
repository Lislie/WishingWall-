<template>
  <div id="app">
    <router-view :wish="wish"></router-view>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        wish: []
      }
    }
//    created () {
//      axios.get('/api/wish')
//        .then((response) => {
//          if (response.data.code === ERR_OK) {
//            this.wish = response.data.data
//          }
//          console.log(response, this.wish)
//        })
//        .catch((err) => {
//          console.log(err)
//        })
//    }
  }
</script>

<style lang="stylus" scoped>
    #app
      font-family 'MFYueYuan_Noncommercial-Regular', Helvetica, Arial, sans-serif
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      text-align center
      color #2c3e50
</style>
