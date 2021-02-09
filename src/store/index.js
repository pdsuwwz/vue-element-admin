import Vue from 'vue'
import Vuex from 'vuex'
import plugins from '@/store/plugins'

/**
 * 存放模块化的 module
 */
import DemoTestModule from '@/modules/DemoTest/store'
import UserAccountModule from '@/modules/UserAccount/store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    DemoTest: DemoTestModule,
    UserAccount: UserAccountModule
  },
  plugins
})
export default store
