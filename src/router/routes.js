const Layout = () => import('@/components/Layout/index')
const LayoutBasic = () => import('@/components/Layout/LayoutBasic')
const importModule = (filePath) => {
  return () => import(`@/modules/${filePath}`)
}

/**
 * 为渲染菜单添加的测试路由
 * hiddenMenu: true 表示不在菜单中显示
 */
const menusTest = [
  {
    path: '/nested',
    component: Layout,
    name: 'Nested',
    icon: 'el-icon-location',
    meta: {
      title: '嵌套路由测试'
    },
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        meta: {
          title: 'Menu1'
        }
      },
      {
        path: 'menu2',
        name: 'Menu2',
        meta: {
          title: 'Menu2'
        },
        children: [
          {
            path: 'menu2-1',
            name: 'Menu2-1',
            meta: {
              title: 'Menu2-1'
            }
          },
          {
            path: 'menu2-2',
            name: 'Menu2-2',
            hiddenMenu: true,
            meta: {
              title: 'Menu2-2'
            }
          },
          {
            path: 'menu2-3',
            name: 'Menu2-3',
            meta: {
              title: 'Menu2-3'
            }
          }
        ]
      },
      {
        path: 'menu3',
        name: 'Menu3',
        icon: 'el-icon-setting',
        meta: {
          title: 'Menu3'
        },
        children: [
          {
            path: 'menu3-1',
            name: 'Menu3-1',
            meta: {
              title: 'Menu3-1'
            }
          },
          {
            path: 'menu3-2',
            name: 'Menu3-2',
            meta: {
              title: 'Menu3-2'
            },
            children: [
              {
                path: 'menu3-2-1',
                name: 'Menu3-2-1',
                meta: {
                  title: 'Menu3-2-1'
                }
              }
            ]
          }
        ]
      },
      {
        path: 'menu4',
        name: 'Menu4',
        icon: 'el-icon-setting',
        meta: {
          title: 'Menu4'
        }
      }
    ]
  }
]

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
    icon: 'el-icon-attract',
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
    icon: 'eye',
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
  // TODO: 为渲染菜单添加的测试路由
  ...menusTest,
  {
    path: '*',
    name: '404',
    component: () => import('@/components/404')
  }
]
export default routes
