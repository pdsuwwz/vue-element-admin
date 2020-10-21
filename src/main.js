import Vue from 'vue'
import App from './App'

// fontawesome
import '@/assets/fonts/fontawesome'

import ElementUI from 'element-ui'
import { sync } from 'vuex-router-sync'
import router from '@/router/index'
import store from '@/store/index'
import Meta from 'vue-meta'
import Mixin from '@/mixins'

import '@/styles/element-variables.scss'
import '@/styles/theme.scss'

import '@/router/permission'

Vue.use(Meta)
Vue.use(ElementUI, { size: 'large', zIndex: 3000 })

Vue.config.productionTip = false

Vue.mixin(Mixin)
sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
