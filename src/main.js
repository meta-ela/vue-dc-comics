import Vue from 'vue';
import App from './App.vue';
import "bootstrap";

import "./assets/scss/main.scss"
/* import 'bootstrap/dist/css/bootstrap.min.css'; */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
