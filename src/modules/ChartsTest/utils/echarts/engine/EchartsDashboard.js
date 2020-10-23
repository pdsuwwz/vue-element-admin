// Dashboard 仪表盘
export function echartsDashboard ({ tooltip, series }) {
  return {
    tooltip,
    toolbox: {
      feature: {
        restore: {},
        saveAsImage: {}
      }
    },
    series
  }
}
