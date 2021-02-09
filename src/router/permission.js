import router from '@/router'
import store from '@/store'
import Cookie from 'js-cookie'
import UserAccountModule from '@/modules/UserAccount/store'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  showSpinner: false
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  document.title = `${to.meta.title || ''} - Vue Element Admin`
  if (to.name === 'UserLogin') {
    next()
    return
  }

  const { error, data } = await store.dispatch(UserAccountModule.getAction('getUserInfo'))
  if (error === 0) {
    if (Cookie.get('name') === data.user.username) {
      next()
      return
    }

    Cookie.remove('token')
    Cookie.remove('name')
    next('/user/login')
  } else {
    Cookie.remove('token')
    next('/user/login')
  }
})

router.afterEach(() => {
  NProgress.done()
})
