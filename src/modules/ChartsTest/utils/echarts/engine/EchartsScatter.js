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
