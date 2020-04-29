import Vue from 'vue'
import Vuex from 'vuex'
import employee from './store/employee'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    employee
  }
})
