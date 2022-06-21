<template>
  <div id="app">
    <TheHeader></TheHeader>
    <main>
      <!-- banner nero vuoto -->
      <div class="black_banner">
        <div class="container">
          <h4 class="py-5 mb-0">--> Content Goes here >-- </h4>
        </div>
      </div>
      <BannerBlue></BannerBlue>
      <TheFooter></TheFooter>
      <BannerFooter></BannerFooter>
    </main>
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

.black_banner {
  background-color: black;
  color: white;
}
</style>
