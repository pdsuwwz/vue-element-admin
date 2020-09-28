import router from '@/router'

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || ''} - Vue Element Admin`
  next()
})
