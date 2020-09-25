import router from '@/router'

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || 'vue-element-admin'}`
  next()
})
