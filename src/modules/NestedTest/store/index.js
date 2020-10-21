
const NestedTestModule = {
  namespaced: true,
  state: {
  },
  getters: {
  },
  actions: {
  },
  mutations: {
  },
  getAction (name) {
    return `NestedTest/${Object.keys(this.actions)[Object.keys(this.actions).indexOf(name)]}`
  }
}

export default NestedTestModule
