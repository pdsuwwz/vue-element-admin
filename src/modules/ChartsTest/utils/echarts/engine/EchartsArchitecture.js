/*
 * @Author: GGupzHH
 * @Date: 2020-10-22 14:45:50
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-10-23 11:23:31
 */

// Dashboard 架构图
export function echartsArchitecture ({ data }) {
  return {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {
        type: 'tree',
        data: [data],
        top: '1%',
        left: '7%',
        bottom: '1%',
        right: '20%',
        symbolSize: 7,
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          fontSize: 9
        },
        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        },

        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
      }
    ]
  }
}
