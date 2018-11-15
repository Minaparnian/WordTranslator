<template>
  <div id="app">
    <div id="header-nav" class="nav-bars">
      <router-link to="/">Home</router-link>
      <router-link to="/words">Words</router-link>
      <router-link v-for="(word, index) in words.slice(0, 1)" :key="index" :to="latestWord" v-text="word.headword"></router-link>
    </div>
    <router-view/>
    <div id="footer-nav" class="nav-bars" v-for="(word, key) in words" :key="key">
        My Dictionary 2018 -{{ key + 1 }} words has been added.
    </div>
  </div>
</template>

<script>
import './assets/sass/styles.scss'
export default {
  name: 'App',
  data: () => ({
    wordCount: 0,
    latestWord: ''
  }),
  computed: {
    words () {
      return this.$store.state.words.slice().reverse()
    }
  }
}
</script>

<style lang="scss">
  body {
    overflow: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  }

  .nav-bars {
    background: cornflowerblue;
    position: fixed;
    width: 100%;
    padding: 10px;
    color: white;
    a {
      color: white;
      text-decoration: none;
      padding: 20px;
    }
  }
  #header-nav {
    top: 0;
    left: 0;
  }

  #footer-nav {
    bottom: 0;
    left: 0;
  }
</style>
