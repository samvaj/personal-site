<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
  import MainPage from './components/MainPage.vue'

  export default {
    name: 'app',
    components: {
      MainPage
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Space+Mono');
  #app {
    font-family: Space Mono, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    margin-top: 150px;
    font-size: 16px;
  }
</style>
