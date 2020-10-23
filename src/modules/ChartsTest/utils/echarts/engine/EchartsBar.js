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
