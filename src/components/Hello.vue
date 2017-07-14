<template>
  <div class="hello">
    <h1></h1>
    <h2></h2>
    <ul >
      <li v-for="item in wish"><a href="https://vuejs.org" target="_blank">{{item.id}}</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    wish: {
      type: Array
    }
  },
  data () {
    return {
    }
  },
  computed: {
    selectWishs () {
      let wishs = []
      this.wish.forEach((wish) => {
        if (wish.count) {
          wishs.push(wish)
        }
      })
      return wishs
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
