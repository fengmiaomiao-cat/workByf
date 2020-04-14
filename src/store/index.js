import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inputValue: ''
  },
  mutations: {
    setInputValue(state, val){
      state.inputValue = val
      //console.log(state.inputValue)
    }
  },
  actions: {
  },
  modules: {
  }
})
