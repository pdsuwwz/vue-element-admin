/*
 * @Author: GGupzHH
 * @Date: 2020-10-22 14:45:50
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-10-22 19:01:57
 */

// Dashboard 仪表盘
export function echartsDashboard ({ tooltip, series }) {
  return {
    tooltip,
    toolbox: {
      feature: {
        restore: {},
        saveAsImage: {}
      }
    },
    series
  }
}
