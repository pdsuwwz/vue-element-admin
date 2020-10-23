/*
 * @Author: GGupzHH
 * @Date: 2020-10-22 14:49:02
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-10-23 10:59:18
 */

// Radar 雷达图
export function echartsRadar ({ title, legend, series, indicator }) {
  return {
    title: {
      text: title
    },
    tooltip: {},
    legend: {
      data: legend
    },
    radar: {
      // shape: 'circle',
      name: {
        textStyle: {
          color: '#fff',
          backgroundColor: '#999',
          borderRadius: 3,
          padding: [3, 5]
        }
      },
      indicator
    },
    series
  }
}
