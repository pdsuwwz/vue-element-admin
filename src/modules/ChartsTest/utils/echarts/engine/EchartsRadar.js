/*
 * @Author: GGupzHH
 * @Date: 2020-10-22 14:49:02
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-10-22 19:41:05
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
      indicator: [
        { name: '销售（sales）', max: 6500 },
        { name: '管理（Administration）', max: 16000 },
        { name: '信息技术（Information Techology）', max: 30000 },
        { name: '客服（Customer Support）', max: 38000 },
        { name: '研发（Development）', max: 52000 },
        { name: '市场（Marketing）', max: 25000 }
      ]
    },
    series
  }
}
