import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/screen.css'
import {VueMasonryPlugin} from 'vue-masonry';

// vue masonry
Vue.use(VueMasonryPlugin)

// setting deezer base url
import axios from 'axios'
axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
