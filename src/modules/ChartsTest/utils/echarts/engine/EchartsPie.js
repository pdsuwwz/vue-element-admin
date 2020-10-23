/*
 * @Author: GGupzHH
 * @Date: 2020-10-22 14:47:26
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-10-22 19:30:38
 */

// Pie 饼图
export function echartsPie ({ title, legend, series }) {
  return {
    title: {
      text: title,
      subtext: '纯属虚构',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: legend
    },
    series
  }
}
