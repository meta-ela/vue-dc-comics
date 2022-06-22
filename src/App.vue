<template>
  <div id="app">
    <TheHeader></TheHeader>
    <main>
      <!-- jumbotron pagina -->
      <div class="jumbotron"></div>
      <!-- sezione con card -->
      <div class="bg_black">
        <div class="container">
          <div>
            <a class="box_blue" href="javascript:void(0)">CURRENT SERIES</a>
          </div>
          <!-- importare il ProductsList, all'interno di questo components
          andrà a leggere il ProductsCard -->
          <ProductsList></ProductsList>
          <div class="pb-5 text-center">
            <a class="box_blue" href="javascript:void(0)">LOAD MORE</a>
          </div>
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

@import "assets/scss/main.scss";

</style>
