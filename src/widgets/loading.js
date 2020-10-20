import Vue from 'vue'
import { Loading } from 'element-ui'

export class ServiceLoading {
  static instance = null

  static show (options) {
    this.instance = Loading.service(options)
  }

  static hide () {
    Vue.nextTick(() => {
      this.instance.close()
    })
  }
}
