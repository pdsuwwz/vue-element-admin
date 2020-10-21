
const LayoutBasic = () => import('@/components/Layout/LayoutBasic')
const importModule = (filePath) => {
  return () => import(`@/modules/${filePath}`)
}

const nestedRouter = {
  path: '/nested',
  component: LayoutBasic,
  name: '路由嵌套',
  icon: 'el-icon-location',
  meta: {
    title: '嵌套路由测试'
  },
  redirect: '/nested/menu1',
  children: [
    {
      path: 'menu1',
      name: 'Menu1',
      component: importModule('NestedTest/pages/menu1/index'),
      meta: {
        title: 'Menu1'
      }
    },
    {
      path: 'menu2',
      name: 'Menu2',
      component: importModule('NestedTest/pages/menu2/index'),
      meta: {
        title: 'Menu2'
      },
      redirect: '/nested/menu2/menu2-1',
      children: [
        {
          path: 'menu2-1',
          name: 'Menu2-1',
          component: importModule('NestedTest/pages/menu2/menu2-1/index'),
          meta: {
            title: 'Menu2-1'
          }
        },
        {
          path: 'menu2-2',
          name: 'Menu2-2',
          component: importModule('NestedTest/pages/menu2/menu2-2/index'),
          meta: {
            title: 'Menu2-2'
          },
          redirect: '/nested/menu2/menu2-2/menu2-2-1',
          children: [
            {
              path: 'menu2-2-1',
              name: 'Menu2-2-1',
              component: importModule('NestedTest/pages/menu2/menu2-2/menu2-2-1'),
              meta: {
                title: 'Menu2-2-1'
              }
            },
            {
              path: 'menu2-2-2',
              name: 'Menu2-2-2',
              component: importModule('NestedTest/pages/menu2/menu2-2/menu2-2-2'),
              meta: {
                title: 'Menu2-2-2'
              }
            }
          ]
        },
        {
          path: 'menu2-3',
          name: 'Menu2-3',
          component: importModule('NestedTest/pages/menu2/menu2-3'),
          meta: {
            title: 'Menu2-3'
          }
        }
      ]
    }
  ]
}

export default nestedRouter
