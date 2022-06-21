<template>
  <div id="app">
    <TheHeader></TheHeader>
    <main>
      <!-- banner nero vuoto -->
      <div>--> Content Goes here >-- </div>

      <BannerBlue></BannerBlue>
      <TheFooter></TheFooter>
      <BannerFooter></BannerFooter>
    </main>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import BannerBlue from './components/BannerBlue.vue'
import TheFooter from './components/TheFooter.vue'
import BannerFooter from './components/BannerFooter.vue' 

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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
