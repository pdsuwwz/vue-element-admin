import Vue from 'vue'
import Vuex from 'vuex'

/**
 * 存放模块化的 module
 */
import DemoTestModule from '@/modules/DemoTest/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    DemoTest: DemoTestModule,
    a: a
  }
})
export default store
