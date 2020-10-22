/*
 * @Author: GGupzHH
 * @Date: 2020-10-22 14:46:54
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-10-22 19:27:53
 */

// Bar 柱状图
export function echartsBar ({ dimensions, source }) {
  return {
    legend: {},
    tooltip: {},
    dataset: {
      dimensions,
      source
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [
      { type: 'bar' },
      { type: 'bar' },
      { type: 'bar' }
    ]
  }
}
