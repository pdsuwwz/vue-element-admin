
import nestedRouter from '@/router/modules/nested'

const Layout = () => import('@/components/Layout/index')
const LayoutBasic = () => import('@/components/Layout/LayoutBasic')
const importModule = (filePath) => {
  return () => import(`@/modules/${filePath}`)
}

/**
 * 为渲染菜单添加的测试路由
 * hiddenMenu: true 表示不在菜单中显示
 * 若含有 children 路由，则需要将 redirect 设置为 children[0] 的 path 路径
 */

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    title: 'dashboard',
    name: '首页',
    icon: 'el-icon-setting',
    meta: {
      title: 'dashboard'
    },
    component: LayoutBasic
  },
  {
    path: '/demo-test',
    component: Layout,
    name: 'DemoTest',
    icon: 'el-icon-attract',
    meta: {
      title: 'demo 管理'
    },
    hiddenMenu: true,
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
    icon: 'eye',
    meta: {
      title: '账户'
    },
    hiddenMenu: true,
    redirect: '/user/login',
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
  // TODO: 为渲染菜单添加的测试路由
  nestedRouter,
  {
    path: '*',
    name: '404',
    component: () => import('@/components/404')
  }
]
export default routes
