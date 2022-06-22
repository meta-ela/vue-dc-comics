<template>
  <div id="app">
    <TheHeader></TheHeader>
    <main>
      <!-- banner nero vuoto -->
      <div class="jumbotron"></div>
      <div class="container">
        
        </div>
      <BannerBlue></BannerBlue>
    </main>
    <TheFooter></TheFooter>
    <BannerFooter></BannerFooter>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BannerBlue from './components/BannerBlue.vue';
import TheFooter from './components/TheFooter.vue';
import BannerFooter from './components/BannerFooter.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    BannerBlue,
    TheFooter,
    BannerFooter,
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.jumbotron {
  background-image: url("/public/img/jumbotron.jpg");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 330px;
}
</style>
