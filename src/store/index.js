import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Josh MacSween' },
    categories: ['Over Night', 'On Sale', 'First Class', 'Economy Class'],
  },
  mutations: {},
  actions: {},
  modules: {},
})
