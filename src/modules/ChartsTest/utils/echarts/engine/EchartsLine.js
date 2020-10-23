/*
 * @Author: GGupzHH
 * @Date: 2020-10-22 14:34:10
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-10-22 19:16:36
 */

// Line 折线图
export function echartsLine ({ title, legend, xAxis, series }) {
  return {
    title: {
      text: title
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: legend
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxis
    },
    yAxis: {
      type: 'value'
    },
    series
  }
}
