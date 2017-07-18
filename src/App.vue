<template>
  <div id="app">
    <Carousel v-model="value1">
      <Carousel-item>
        <div class="demo-carousel">1</div>
      </Carousel-item>
      <Carousel-item>
        <page2></page2>
      </Carousel-item>
      <Carousel-item>
        <Wish :wish="wish"></Wish>
      </Carousel-item>
      <Carousel-item>
        <div class="demo-carousel">4</div>
      </Carousel-item>
    </Carousel>
  </div>
</template>

<script>
  import Wish from './components/wish/wish.vue'
//  import page2 from './components/page2/page2.vue'
  export default {
    data () {
      return {
        wish: [],
        value1: 0
      }
    },
    components: {
      Wish
//      page2
    }
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
