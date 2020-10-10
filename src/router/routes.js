const Layout = () => import('@/components/Layout/index')
const importModule = (filePath) => {
  return () => import(`@/modules/${filePath}`)
}

const routes = [
  {
    path: '/',
    title: 'Dashboard'
  },
  {
    path: '/demo-test',
    component: Layout,
    name: 'DemoTest',
    meta: {
      title: 'demo 管理'
    },
    children: [
      {
        path: 'list',
        name: 'DemoTestList',
        component: importModule('DemoTest/pages/list'),
        meta: {
          title: 'demo列表'
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    name: 'User',
    meta: {
      title: '账户'
    },
    children: [
      {
        path: 'login',
        name: 'UserLogin',
        component: importModule('UserAccount/pages/login'),
        meta: {
          title: '登录'
        }
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/components/404')
  }
]
export default routes
