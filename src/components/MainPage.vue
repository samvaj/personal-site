<template>
  <div class="mainpage">
    <h2>
      edwin zhang
    </h2>
    <p>hi I'm edwin!</p>
    <p>i'm currently a software engineering student at the university of waterloo.</p>
    <p>my interests are in deep learning, full-stack web development and computer graphics.</p>
    <p>in my spare time I like to play underwater hockey and the trombone.</p>
    <div class="links">
      <a href="./Resume.pdf" target="_blank">Resume</a>
      <a href="https://github.com/edwinzhng" target="_blank">Github</a>
      <a href="https://linkedin.com/in/edwin-zhang" target="_blank">LinkedIn</a>
      <a href="mailto:edwinzhang64@gmail.com" target="_blank">Email</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainPage',
    props: {
      
    }
  }
</script>

<style scoped>
  .mainpage {
    max-width: 900px;
    margin: auto;
  }

  h2 {
    position: relative;
    margin: 50px 0;
    font-size: 52px;
  }

  h2::after {
    position: absolute;
    content: "";
    height: 7px;
    width: 64px;
    bottom: -15px;
    left: 0;
    background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(52, 143, 80), rgb(86, 180, 211)) repeat scroll 0% 0%;

  }

  a {
    color: #42b983;
  }

  a:hover {
    color: #42b983;
  }

  .links {
    margin-top: 25px;
  }
</style>
