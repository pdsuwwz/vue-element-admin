export default {
  echarts: [
    {
      id: 1,
      name: 'Echarts仪表盘',
      data: {
        tooltip: '{a} <br/>{b} : {c}%',
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            data: [{ value: 50, name: '完成率' }]
          }
        ]
      },
      imgUrl:
        'https://echarts-www.cdn.bcebos.com/examples/data/thumb/gauge.jpg?_v_=20200710_1',
      type: 'echartsDashboard'
    },
    {
      id: 2,
      name: 'Echarts折线图',
      data: {
        title: '折线图堆叠',
        legend: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        xAxis: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      imgUrl:
        'https://echarts-www.cdn.bcebos.com/examples/data/thumb/line-stack.jpg?_v_=20200710_1',
      type: 'echartsLine'
    },
    {
      id: 3,
      name: 'Echarts柱状图',
      data: {
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
          { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
          { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
          { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
          { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
        ]
      },
      imgUrl:
        'https://echarts-www.cdn.bcebos.com/examples/data/thumb/dataset-simple0.jpg?_v_=20200710_1',
      type: 'echartsBar'
    },
    {
      id: 4,
      name: 'Echarts饼图',
      data: {
        title: '某站点用户访问来源',
        legend: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      imgUrl:
        'https://echarts-www.cdn.bcebos.com/examples/data/thumb/pie-simple.jpg?_v_=20200710_1',
      type: 'echartsPie'
    },
    {
      id: 5,
      name: 'Echarts散点图',
      data: {
        title: '散点图',
        effectScatter: [
          [172.7, 105.2],
          [153.4, 42]
        ],
        scatter: [
          [161.2, 51.6],
          [167.5, 59.0],
          [159.5, 49.2],
          [157.0, 63.0],
          [155.8, 53.6],
          [170.0, 59.0],
          [159.1, 47.6],
          [166.0, 69.8],
          [176.2, 66.8],
          [160.2, 75.2],
          [172.5, 55.2],
          [170.9, 54.2],
          [172.9, 62.5],
          [153.4, 42.0],
          [160.0, 50.0],
          [147.2, 49.8],
          [168.2, 49.2],
          [175.0, 73.2],
          [157.0, 47.8],
          [167.6, 68.8],
          [159.5, 50.6],
          [175.0, 82.5],
          [166.8, 57.2],
          [176.5, 87.8],
          [170.2, 72.8],
          [174.0, 54.5],
          [173.0, 59.8],
          [179.9, 67.3],
          [170.5, 67.8],
          [160.0, 47.0],
          [154.4, 46.2],
          [162.0, 55.0],
          [176.5, 83.0],
          [160.0, 54.4],
          [152.0, 45.8],
          [162.1, 53.6],
          [170.0, 73.2],
          [160.2, 52.1],
          [161.3, 67.9],
          [166.4, 56.6],
          [168.9, 62.3],
          [163.8, 58.5],
          [167.6, 54.5],
          [160.0, 50.2],
          [161.3, 60.3],
          [167.6, 58.3],
          [165.1, 56.2],
          [160.0, 50.2],
          [170.0, 72.9],
          [157.5, 59.8],
          [167.6, 61.0],
          [160.7, 69.1],
          [163.2, 55.9],
          [152.4, 46.5],
          [157.5, 54.3],
          [168.3, 54.8],
          [180.3, 60.7],
          [165.5, 60.0],
          [165.0, 62.0],
          [164.5, 60.3],
          [156.0, 52.7],
          [160.0, 74.3],
          [163.0, 62.0],
          [165.7, 73.1],
          [161.0, 80.0],
          [162.0, 54.7],
          [166.0, 53.2],
          [174.0, 75.7],
          [172.7, 61.1],
          [167.6, 55.7],
          [151.1, 48.7],
          [164.5, 52.3],
          [163.5, 50.0],
          [152.0, 59.3],
          [169.0, 62.5],
          [164.0, 55.7],
          [161.2, 54.8],
          [155.0, 45.9],
          [170.0, 70.6],
          [176.2, 67.2],
          [170.0, 69.4],
          [162.5, 58.2],
          [170.3, 64.8],
          [164.1, 71.6],
          [169.5, 52.8],
          [163.2, 59.8],
          [154.5, 49.0],
          [159.8, 50.0],
          [173.2, 69.2],
          [170.0, 55.9],
          [161.4, 63.4],
          [169.0, 58.2],
          [166.2, 58.6],
          [159.4, 45.7],
          [162.5, 52.2],
          [159.0, 48.6],
          [162.8, 57.8],
          [159.0, 55.6],
          [179.8, 66.8],
          [162.9, 59.4],
          [161.0, 53.6],
          [151.1, 73.2],
          [168.2, 53.4],
          [168.9, 69.0],
          [173.2, 58.4],
          [171.8, 56.2],
          [178.0, 70.6],
          [164.3, 59.8],
          [163.0, 72.0],
          [168.5, 65.2],
          [166.8, 56.6],
          [172.7, 105.2],
          [163.5, 51.8],
          [169.4, 63.4],
          [167.8, 59.0],
          [159.5, 47.6],
          [167.6, 63.0],
          [161.2, 55.2],
          [160.0, 45.0],
          [163.2, 54.0],
          [162.2, 50.2],
          [161.3, 60.2],
          [149.5, 44.8],
          [157.5, 58.8],
          [163.2, 56.4],
          [172.7, 62.0],
          [155.0, 49.2],
          [156.5, 67.2],
          [164.0, 53.8],
          [160.9, 54.4],
          [162.8, 58.0],
          [167.0, 59.8],
          [160.0, 54.8],
          [160.0, 43.2],
          [168.9, 60.5],
          [158.2, 46.4],
          [156.0, 64.4],
          [160.0, 48.8],
          [167.1, 62.2],
          [158.0, 55.5],
          [167.6, 57.8],
          [156.0, 54.6],
          [162.1, 59.2],
          [173.4, 52.7],
          [159.8, 53.2],
          [170.5, 64.5],
          [159.2, 51.8],
          [157.5, 56.0],
          [161.3, 63.6],
          [162.6, 63.2],
          [160.0, 59.5],
          [168.9, 56.8],
          [165.1, 64.1],
          [162.6, 50.0],
          [165.1, 72.3],
          [166.4, 55.0],
          [160.0, 55.9],
          [152.4, 60.4],
          [170.2, 69.1],
          [162.6, 84.5],
          [170.2, 55.9],
          [158.8, 55.5],
          [172.7, 69.5],
          [167.6, 76.4],
          [162.6, 61.4],
          [167.6, 65.9],
          [156.2, 58.6],
          [175.2, 66.8],
          [172.1, 56.6],
          [162.6, 58.6],
          [160.0, 55.9],
          [165.1, 59.1],
          [182.9, 81.8],
          [166.4, 70.7],
          [165.1, 56.8],
          [177.8, 60.0],
          [165.1, 58.2],
          [175.3, 72.7],
          [154.9, 54.1],
          [158.8, 49.1],
          [172.7, 75.9],
          [168.9, 55.0],
          [161.3, 57.3],
          [167.6, 55.0],
          [165.1, 65.5],
          [175.3, 65.5],
          [157.5, 48.6],
          [163.8, 58.6],
          [167.6, 63.6],
          [165.1, 55.2],
          [165.1, 62.7],
          [168.9, 56.6],
          [162.6, 53.9],
          [164.5, 63.2],
          [176.5, 73.6],
          [168.9, 62.0],
          [175.3, 63.6],
          [159.4, 53.2],
          [160.0, 53.4],
          [170.2, 55.0],
          [162.6, 70.5],
          [167.6, 54.5],
          [162.6, 54.5],
          [160.7, 55.9],
          [160.0, 59.0],
          [157.5, 63.6],
          [162.6, 54.5],
          [152.4, 47.3],
          [170.2, 67.7],
          [165.1, 80.9],
          [172.7, 70.5],
          [165.1, 60.9],
          [170.2, 63.6],
          [170.2, 54.5],
          [170.2, 59.1],
          [161.3, 70.5],
          [167.6, 52.7],
          [167.6, 62.7],
          [165.1, 86.3],
          [162.6, 66.4],
          [152.4, 67.3],
          [168.9, 63.0],
          [170.2, 73.6],
          [175.2, 62.3],
          [175.2, 57.7],
          [160.0, 55.4],
          [165.1, 104.1],
          [174.0, 55.5],
          [170.2, 77.3],
          [160.0, 80.5],
          [167.6, 64.5],
          [167.6, 72.3],
          [167.6, 61.4],
          [154.9, 58.2],
          [162.6, 81.8],
          [175.3, 63.6],
          [171.4, 53.4],
          [157.5, 54.5],
          [165.1, 53.6],
          [160.0, 60.0],
          [174.0, 73.6],
          [162.6, 61.4],
          [174.0, 55.5],
          [162.6, 63.6],
          [161.3, 60.9],
          [156.2, 60.0],
          [149.9, 46.8],
          [169.5, 57.3],
          [160.0, 64.1],
          [175.3, 63.6],
          [169.5, 67.3],
          [160.0, 75.5],
          [172.7, 68.2],
          [162.6, 61.4],
          [157.5, 76.8],
          [176.5, 71.8],
          [164.4, 55.5],
          [160.7, 48.6],
          [174.0, 66.4],
          [163.8, 67.3]
        ]
      },
      imgUrl:
        'https://echarts-www.cdn.bcebos.com/examples/data/thumb/scatter-effect.jpg?_v_=20200710_1',
      type: 'echartsScatter'
    },
    {
      id: 6,
      name: 'Echarts架构图',
      data: {
        data: {
          name: 'flare',
          children: [
            {
              name: 'analytics',
              children: [
                {
                  name: 'cluster',
                  children: [
                    { name: 'AgglomerativeCluster', value: 3938 },
                    { name: 'CommunityStructure', value: 3812 },
                    { name: 'HierarchicalCluster', value: 6714 },
                    { name: 'MergeEdge', value: 743 }
                  ]
                },
                {
                  name: 'graph',
                  children: [
                    { name: 'BetweennessCentrality', value: 3534 },
                    { name: 'LinkDistance', value: 5731 },
                    { name: 'MaxFlowMinCut', value: 7840 },
                    { name: 'ShortestPaths', value: 5914 },
                    { name: 'SpanningTree', value: 3416 }
                  ]
                },
                {
                  name: 'optimization',
                  children: [{ name: 'AspectRatioBanker', value: 7074 }]
                }
              ],
              collapsed: true
            },
            {
              name: 'animate',
              children: [
                { name: 'Easing', value: 17010 },
                { name: 'FunctionSequence', value: 5842 },
                {
                  name: 'interpolate',
                  children: [
                    { name: 'ArrayInterpolator', value: 1983 },
                    { name: 'ColorInterpolator', value: 2047 },
                    { name: 'DateInterpolator', value: 1375 },
                    { name: 'Interpolator', value: 8746 },
                    { name: 'MatrixInterpolator', value: 2202 },
                    { name: 'NumberInterpolator', value: 1382 },
                    { name: 'ObjectInterpolator', value: 1629 },
                    { name: 'PointInterpolator', value: 1675 },
                    { name: 'RectangleInterpolator', value: 2042 }
                  ]
                },
                { name: 'ISchedulable', value: 1041 },
                { name: 'Parallel', value: 5176 },
                { name: 'Pause', value: 449 },
                { name: 'Scheduler', value: 5593 },
                { name: 'Sequence', value: 5534 },
                { name: 'Transition', value: 9201 },
                { name: 'Transitioner', value: 19975 },
                { name: 'TransitionEvent', value: 1116 },
                { name: 'Tween', value: 6006 }
              ]
            },
            {
              name: 'data',
              children: [
                {
                  name: 'converters',
                  children: [
                    { name: 'Converters', value: 721 },
                    { name: 'DelimitedTextConverter', value: 4294 },
                    { name: 'GraphMLConverter', value: 9800 },
                    { name: 'IDataConverter', value: 1314 },
                    { name: 'JSONConverter', value: 2220 }
                  ]
                },
                { name: 'DataField', value: 1759 },
                { name: 'DataSchema', value: 2165 },
                { name: 'DataSet', value: 586 },
                { name: 'DataSource', value: 3331 },
                { name: 'DataTable', value: 772 },
                { name: 'DataUtil', value: 3322 }
              ],
              collapsed: true
            },
            {
              name: 'display',
              children: [
                { name: 'DirtySprite', value: 8833 },
                { name: 'LineSprite', value: 1732 },
                { name: 'RectSprite', value: 3623 },
                { name: 'TextSprite', value: 10066 }
              ]
            },
            {
              name: 'flex',
              children: [{ name: 'FlareVis', value: 4116 }],
              collapsed: true
            },
            {
              name: 'physics',
              children: [
                { name: 'DragForce', value: 1082 },
                { name: 'GravityForce', value: 1336 },
                { name: 'IForce', value: 319 },
                { name: 'NBodyForce', value: 10498 },
                { name: 'Particle', value: 2822 },
                { name: 'Simulation', value: 9983 },
                { name: 'Spring', value: 2213 },
                { name: 'SpringForce', value: 1681 }
              ]
            },
            {
              name: 'query',
              children: [
                { name: 'AggregateExpression', value: 1616 },
                { name: 'And', value: 1027 },
                { name: 'Arithmetic', value: 3891 },
                { name: 'Average', value: 891 },
                { name: 'BinaryExpression', value: 2893 },
                { name: 'Comparison', value: 5103 },
                { name: 'CompositeExpression', value: 3677 },
                { name: 'Count', value: 781 },
                { name: 'DateUtil', value: 4141 },
                { name: 'Distinct', value: 933 },
                { name: 'Expression', value: 5130 },
                { name: 'ExpressionIterator', value: 3617 },
                { name: 'Fn', value: 3240 },
                { name: 'If', value: 2732 },
                { name: 'IsA', value: 2039 },
                { name: 'Literal', value: 1214 },
                { name: 'Match', value: 3748 },
                { name: 'Maximum', value: 843 },
                {
                  name: 'methods',
                  children: [
                    { name: 'add', value: 593 },
                    { name: 'and', value: 330 },
                    { name: 'average', value: 287 },
                    { name: 'count', value: 277 },
                    { name: 'distinct', value: 292 },
                    { name: 'div', value: 595 },
                    { name: 'eq', value: 594 },
                    { name: 'fn', value: 460 },
                    { name: 'gt', value: 603 },
                    { name: 'gte', value: 625 },
                    { name: 'iff', value: 748 },
                    { name: 'isa', value: 461 },
                    { name: 'lt', value: 597 },
                    { name: 'lte', value: 619 },
                    { name: 'max', value: 283 },
                    { name: 'min', value: 283 },
                    { name: 'mod', value: 591 },
                    { name: 'mul', value: 603 },
                    { name: 'neq', value: 599 },
                    { name: 'not', value: 386 },
                    { name: 'or', value: 323 },
                    { name: 'orderby', value: 307 },
                    { name: 'range', value: 772 },
                    { name: 'select', value: 296 },
                    { name: 'stddev', value: 363 },
                    { name: 'sub', value: 600 },
                    { name: 'sum', value: 280 },
                    { name: 'update', value: 307 },
                    { name: 'variance', value: 335 },
                    { name: 'where', value: 299 },
                    { name: 'xor', value: 354 },
                    { name: '-', value: 264 }
                  ]
                },
                { name: 'Minimum', value: 843 },
                { name: 'Not', value: 1554 },
                { name: 'Or', value: 970 },
                { name: 'Query', value: 13896 },
                { name: 'Range', value: 1594 },
                { name: 'StringUtil', value: 4130 },
                { name: 'Sum', value: 791 },
                { name: 'Variable', value: 1124 },
                { name: 'Variance', value: 1876 },
                { name: 'Xor', value: 1101 }
              ],
              collapsed: true
            },
            {
              name: 'scale',
              children: [
                { name: 'IScaleMap', value: 2105 },
                { name: 'LinearScale', value: 1316 },
                { name: 'LogScale', value: 3151 },
                { name: 'OrdinalScale', value: 3770 },
                { name: 'QuantileScale', value: 2435 },
                { name: 'QuantitativeScale', value: 4839 },
                { name: 'RootScale', value: 1756 },
                { name: 'Scale', value: 4268 },
                { name: 'ScaleType', value: 1821 },
                { name: 'TimeScale', value: 5833 }
              ]
            },
            {
              name: 'util',
              children: [
                { name: 'Arrays', value: 8258 },
                { name: 'Colors', value: 10001 },
                { name: 'Dates', value: 8217 },
                { name: 'Displays', value: 12555 },
                { name: 'Filter', value: 2324 },
                { name: 'Geometry', value: 10993 },
                {
                  name: 'heap',
                  children: [
                    { name: 'FibonacciHeap', value: 9354 },
                    { name: 'HeapNode', value: 1233 }
                  ]
                },
                { name: 'IEvaluable', value: 335 },
                { name: 'IPredicate', value: 383 },
                { name: 'IValueProxy', value: 874 },
                {
                  name: 'math',
                  children: [
                    { name: 'DenseMatrix', value: 3165 },
                    { name: 'IMatrix', value: 2815 },
                    { name: 'SparseMatrix', value: 3366 }
                  ]
                },
                { name: 'Maths', value: 17705 },
                { name: 'Orientation', value: 1486 },
                {
                  name: 'palette',
                  children: [
                    { name: 'ColorPalette', value: 6367 },
                    { name: 'Palette', value: 1229 },
                    { name: 'ShapePalette', value: 2059 },
                    { name: 'SizePalette', value: 2291 }
                  ]
                },
                { name: 'Property', value: 5559 },
                { name: 'Shapes', value: 19118 },
                { name: 'Sort', value: 6887 },
                { name: 'Stats', value: 6557 },
                { name: 'Strings', value: 22026 }
              ],
              collapsed: true
            },
            {
              name: 'vis',
              children: [
                {
                  name: 'axis',
                  children: [
                    { name: 'Axes', value: 1302 },
                    { name: 'Axis', value: 24593 },
                    { name: 'AxisGridLine', value: 652 },
                    { name: 'AxisLabel', value: 636 },
                    { name: 'CartesianAxes', value: 6703 }
                  ]
                },
                {
                  name: 'controls',
                  children: [
                    { name: 'AnchorControl', value: 2138 },
                    { name: 'ClickControl', value: 3824 },
                    { name: 'Control', value: 1353 },
                    { name: 'ControlList', value: 4665 },
                    { name: 'DragControl', value: 2649 },
                    { name: 'ExpandControl', value: 2832 },
                    { name: 'HoverControl', value: 4896 },
                    { name: 'IControl', value: 763 },
                    { name: 'PanZoomControl', value: 5222 },
                    { name: 'SelectionControl', value: 7862 },
                    { name: 'TooltipControl', value: 8435 }
                  ]
                },
                {
                  name: 'data',
                  children: [
                    { name: 'Data', value: 20544 },
                    { name: 'DataList', value: 19788 },
                    { name: 'DataSprite', value: 10349 },
                    { name: 'EdgeSprite', value: 3301 },
                    { name: 'NodeSprite', value: 19382 },
                    {
                      name: 'render',
                      children: [
                        { name: 'ArrowType', value: 698 },
                        { name: 'EdgeRenderer', value: 5569 },
                        { name: 'IRenderer', value: 353 },
                        { name: 'ShapeRenderer', value: 2247 }
                      ]
                    },
                    { name: 'ScaleBinding', value: 11275 },
                    { name: 'Tree', value: 7147 },
                    { name: 'TreeBuilder', value: 9930 }
                  ]
                },
                {
                  name: 'events',
                  children: [
                    { name: 'DataEvent', value: 2313 },
                    { name: 'SelectionEvent', value: 1880 },
                    { name: 'TooltipEvent', value: 1701 },
                    { name: 'VisualizationEvent', value: 1117 }
                  ]
                },
                {
                  name: 'legend',
                  children: [
                    { name: 'Legend', value: 20859 },
                    { name: 'LegendItem', value: 4614 },
                    { name: 'LegendRange', value: 10530 }
                  ]
                },
                {
                  name: 'operator',
                  children: [
                    {
                      name: 'distortion',
                      children: [
                        { name: 'BifocalDistortion', value: 4461 },
                        { name: 'Distortion', value: 6314 },
                        { name: 'FisheyeDistortion', value: 3444 }
                      ]
                    },
                    {
                      name: 'encoder',
                      children: [
                        { name: 'ColorEncoder', value: 3179 },
                        { name: 'Encoder', value: 4060 },
                        { name: 'PropertyEncoder', value: 4138 },
                        { name: 'ShapeEncoder', value: 1690 },
                        { name: 'SizeEncoder', value: 1830 }
                      ]
                    },
                    {
                      name: 'filter',
                      children: [
                        { name: 'FisheyeTreeFilter', value: 5219 },
                        { name: 'GraphDistanceFilter', value: 3165 },
                        { name: 'VisibilityFilter', value: 3509 }
                      ]
                    },
                    { name: 'IOperator', value: 1286 },
                    {
                      name: 'label',
                      children: [
                        { name: 'Labeler', value: 9956 },
                        { name: 'RadialLabeler', value: 3899 },
                        { name: 'StackedAreaLabeler', value: 3202 }
                      ]
                    },
                    {
                      name: 'layout',
                      children: [
                        { name: 'AxisLayout', value: 6725 },
                        { name: 'BundledEdgeRouter', value: 3727 },
                        { name: 'CircleLayout', value: 9317 },
                        { name: 'CirclePackingLayout', value: 12003 },
                        { name: 'DendrogramLayout', value: 4853 },
                        { name: 'ForceDirectedLayout', value: 8411 },
                        { name: 'IcicleTreeLayout', value: 4864 },
                        { name: 'IndentedTreeLayout', value: 3174 },
                        { name: 'Layout', value: 7881 },
                        { name: 'NodeLinkTreeLayout', value: 12870 },
                        { name: 'PieLayout', value: 2728 },
                        { name: 'RadialTreeLayout', value: 12348 },
                        { name: 'RandomLayout', value: 870 },
                        { name: 'StackedAreaLayout', value: 9121 },
                        { name: 'TreeMapLayout', value: 9191 }
                      ]
                    },
                    { name: 'Operator', value: 2490 },
                    { name: 'OperatorList', value: 5248 },
                    { name: 'OperatorSequence', value: 4190 },
                    { name: 'OperatorSwitch', value: 2581 },
                    { name: 'SortOperator', value: 2023 }
                  ]
                },
                { name: 'Visualization', value: 16540 }
              ]
            }
          ]
        }
      },
      imgUrl:
        'https://echarts-www.cdn.bcebos.com/examples/data/thumb/tree-basic.jpg?_v_=20200710_1',
      type: 'echartsArchitecture'
    },
    {
      id: 7,
      name: 'Echarts雷达图',
      data: {
        title: '基础雷达图',
        legend: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）'],
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）'
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销（Actual Spending）'
              }
            ]
          }
        ],
        indicator: [
          { name: '销售（sales）', max: 6500 },
          { name: '管理（Administration）', max: 16000 },
          { name: '信息技术（Information Techology）', max: 30000 },
          { name: '客服（Customer Support）', max: 38000 },
          { name: '研发（Development）', max: 52000 },
          { name: '市场（Marketing）', max: 25000 }
        ]
      },
      imgUrl:
        'https://echarts-www.cdn.bcebos.com/examples/data/thumb/radar.jpg?_v_=20200710_1',
      type: 'echartsRadar'
    }
    // {
    //   id: 8,
    //   name: 'Echarts混合图',
    //   data: {},
    //   imgUrl: '',
    //   type: 'echartsMixed'
    // }
  ],
  d3: [
    {
      id: 2,
      name: 'D3折线图',
      data: {},
      imgUrl: '',
      type: 'D3Line'
    },
    {
      id: 2,
      name: 'D3折线图',
      data: {},
      imgUrl: '',
      type: 'D3Line'
    },
    {
      id: 2,
      name: 'D3折线图',
      data: {},
      imgUrl: '',
      type: 'D3Line'
    },
    {
      id: 2,
      name: 'D3折线图',
      data: {},
      imgUrl: '',
      type: 'D3Line'
    },
    {
      id: 2,
      name: 'D3折线图',
      data: {},
      imgUrl: '',
      type: 'D3Line'
    }
  ]
}
