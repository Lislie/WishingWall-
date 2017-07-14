<template>
  <div id="app">
    <router-view :wish="wish"></router-view>
  </div>
</template>

<script>
  import axios from 'axios'

  const ERR_OK = 200

  export default {
    data () {
      return {
        wish: []
      }
    },
    created () {
      axios.get('/api/wish')
        .then((response) => {
          if (response.data.code === ERR_OK) {
            this.wish = response.data.data
          }
          console.log(response, this.wish)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
</script>

<style>
  #app {
    font-family: '造字工房悦圆演示版', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 1rem;
  }
</style>
