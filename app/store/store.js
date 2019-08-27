import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import allnews from './AllNews'
import topnews from './TopHews'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    topnews,
    allnews
  }
})
