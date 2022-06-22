<template>
  <div id="app">
    <TheHeader></TheHeader>
    <main>
      <!-- jumbotron pagina -->
      <div class="jumbotron"></div>
      <!-- sezione con card -->
      <div class="bg_black">
        <div class="container">
        <!-- importare il ProductsList, all'interno di questo components
        andrà a leggere il ProductsCard -->
        <ProductsList></ProductsList>
        </div>
      </div>
      <!-- banner blue pagina -->
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
import ProductsList from './components/ProductsList.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    BannerBlue,
    TheFooter,
    BannerFooter,
    ProductsList,
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
  height: 350px;
}

.bg_black {
  background-color: #1c1c1c;
}
</style>
