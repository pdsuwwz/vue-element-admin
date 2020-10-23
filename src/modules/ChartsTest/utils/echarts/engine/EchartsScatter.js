/*
 * @Author: GGupzHH
 * @Date: 2020-10-22 14:47:59
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-10-22 19:33:25
 */

// Scatter 散点图
export function echartsScatter ({ title, effectScatter, scatter }) {
  return {
    title: {
      text: title
    },
    xAxis: {
      scale: true
    },
    yAxis: {
      scale: true
    },
    series: [{
      type: 'effectScatter',
      symbolSize: 20,
      data: effectScatter
    }, {
      type: 'scatter',
      data: scatter
    }]
  }
}
