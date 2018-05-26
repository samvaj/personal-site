<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Space+Mono');
  #app {
    font-family: Space Mono, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    font-size: 16px;
  }
</style>
