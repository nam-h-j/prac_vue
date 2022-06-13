// store.js
import Vue from "vue";
import Vuex from "vuex";
import countSlice from "./slice/countSlice";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    ...countSlice,
  },
});
