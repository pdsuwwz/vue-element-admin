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
