<template>
  <div class="mainpage">
    <h2>
      edwin zhang
    </h2>
    <p>hi i'm edwin!</p>
    <p>currently, i'm a software engineering student at the university of waterloo.</p>
    <p>i'm interested in deep learning, full-stack web development and computer graphics.</p>
    <p>in my spare time, i like to play underwater hockey and the trombone.</p>
    <div class="links">
      <a href="./Resume.pdf" target="_blank">Résumé</a>
      <a href="https://github.com/edwinzhng" target="_blank">Github</a>
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
    margin: 150px auto 75px auto;
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
    margin-right: 5px;
    color: #42b983;
  }

  a:hover {
    color: #42b983;
  }

  .links {
    margin-top: 25px;
  }

  @media only screen and (max-height: 720px) {
    .mainpage {
      margin-top: 55px;
    }
  }

  @media only screen and (max-width: 960px) {
    .mainpage {
      margin-left: 30px;
      margin-right: 30px;
    }
  }
</style>
