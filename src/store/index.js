import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import player from './player';
import search from './search';
import globals from './globals';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    home,
    player,
    search,
    globals,
  },
  strict: debug,
});

export default store;