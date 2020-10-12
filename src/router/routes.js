const Layout = () => import('@/components/Layout/index')
const LayoutBasic = () => import('@/components/Layout/LayoutBasic')
const importModule = (filePath) => {
  return () => import(`@/modules/${filePath}`)
}

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    title: 'dashboard',
    name: '首页',
    meta: {
      title: 'dashboard'
    },
    component: LayoutBasic,
    children: [
      {
        path: 'test',
        name: '测试啦啦啦',
        component: () => import('@/components/Navigation/test'),
        meta: {
          title: '测试啦啦啦'
        },
        children: [
          {
            path: 'test23',
            name: '测试啦啦啦23',
            component: () => import('@/components/Navigation/test'),
            meta: {
              title: '测试啦啦啦23'
            }
          }
        ]
      }
    ]
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
