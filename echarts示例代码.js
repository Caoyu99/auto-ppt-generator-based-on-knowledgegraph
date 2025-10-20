myChart.showLoading();
const graph = {
  categories: [
    {
      name: '环境科学'
    },
    {
      name: '人类活动与环境问题'
    },
    {
      name: '大气污染及其防治'
    },
    {
      name: '水污染及其防治'
    },
    {
      name: '固体废物的处理和利用'
    },
    {
      name: '环境管理'
    },
    {
      name: '可持续发展'
    },
    {
      name: '绿色化学与化工基础'
    }
  ],
  nodes: [
    {
      name: '环境科学',
      symbolSize: 60,
      category: 0,
      draggable: 'true',
      value: 10
    },
    {
      name: '人类活动与环境问题',
      symbolSize: 50,
      category: 1,
      draggable: 'true',
      value: 10
    },
    {
      name: '大气污染及其防治',
      symbolSize: 50,
      category: 2,
      draggable: 'true',
      value: 10
    },
    {
      name: '水污染及其防治',
      symbolSize: 50,
      category: 3,
      draggable: 'true',
      value: 10
    },
    {
      name: '固体废物的处理和利用',
      symbolSize: 50,
      category: 4,
      draggable: 'true',
      value: 10
    },
    {
      name: '环境管理',
      symbolSize: 50,
      category: 5,
      draggable: 'true',
      value: 10
    },
    {
      name: '可持续发展与清洁生产',
      symbolSize: 50,
      category: 6,
      draggable: 'true',
      value: 10
    },
    {
      name: '绿色化学与化工基础',
      symbolSize: 50,
      category: 7,
      draggable: 'true',
      value: 10
    },
    {
      name: '生态学基本原理',
      symbolSize: 30,
      category: 1,
      draggable: 'true',
      value: 5
    },
    {
      name: '人口与环境',
      symbolSize: 30,
      category: 1,
      draggable: 'true',
      value: 5
    },
    {
      name: '土地资源的利用和保护',
      symbolSize: 30,
      category: 1,
      draggable: 'true',
      value: 5
    },
    {
      name: '能源利用与保护',
      symbolSize: 30,
      category: 1,
      draggable: 'true',
      value: 5
    },
    {
      name: '大气结构与组成',
      symbolSize: 30,
      category: 2,
      draggable: 'true',
      value: 5
    },
    {
      name: '主要大气污染物及其来源',
      symbolSize: 30,
      category: 2,
      draggable: 'true',
      value: 5
    },
    {
      name: '污染物在大气中的迁移和扩散',
      symbolSize: 30,
      category: 2,
      draggable: 'true',
      value: 5
    },
    {
      name: '大气污染综合防治',
      symbolSize: 30,
      category: 2,
      draggable: 'true',
      value: 5
    },
    {
      name: '大气污染治理技术简介',
      symbolSize: 30,
      category: 2,
      draggable: 'true',
      value: 5
    },
    {
      name: '水体的污染与自净',
      symbolSize: 30,
      category: 3,
      draggable: 'true',
      value: 5
    },
    {
      name: '水体中主要污染物的来源及其危害',
      symbolSize: 30,
      category: 3,
      draggable: 'true',
      value: 5
    },
    {
      name: '污水处理技术概述',
      symbolSize: 30,
      category: 3,
      draggable: 'true',
      value: 5
    },
    {
      name: '固体废物的处理技术',
      symbolSize: 30,
      category: 4,
      draggable: 'true',
      value: 5
    },
    {
      name: '固体废物的资源化与回收利用',
      symbolSize: 30,
      category: 4,
      draggable: 'true',
      value: 5
    },
    {
      name: '城市垃圾的处理',
      symbolSize: 30,
      category: 4,
      draggable: 'true',
      value: 5
    },
    {
      name: '环境保护法',
      symbolSize: 30,
      category: 5,
      draggable: 'true',
      value: 5
    },
    {
      name: '环境管理的基本制度',
      symbolSize: 30,
      category: 5,
      draggable: 'true',
      value: 5
    },
    {
      name: '环境标准',
      symbolSize: 30,
      category: 5,
      draggable: 'true',
      value: 5
    },
    {
      name: '环境监测',
      symbolSize: 30,
      category: 5,
      draggable: 'true',
      value: 5
    },
    {
      name: '可持续发展战略',
      symbolSize: 30,
      category: 6,
      draggable: 'true',
      value: 5
    },
    {
      name: '清洁生产',
      symbolSize: 30,
      category: 6,
      draggable: 'true',
      value: 5
    },
    {
      name: '循环经济',
      symbolSize: 30,
      category: 6,
      draggable: 'true',
      value: 5
    },
    {
      name: '工业生态学与生态工业园',
      symbolSize: 30,
      category: 6,
      draggable: 'true',
      value: 5
    },
    {
      name: '绿色化学与原子经济性反应',
      symbolSize: 30,
      category: 7,
      draggable: 'true',
      value: 5
    },
    {
      name: '无毒无害反应剂和溶剂',
      symbolSize: 30,
      category: 7,
      draggable: 'true',
      value: 5
    },
    {
      name: '绿色化学产品',
      symbolSize: 30,
      category: 7,
      draggable: 'true',
      value: 5
    },
    {
      name: '可再生的物质资源',
      symbolSize: 30,
      category: 7,
      draggable: 'true',
      value: 5
    }
  ],
  links: [
    {
      source: '环境科学',
      target: '人类活动与环境问题'
    },
    {
      source: '环境科学',
      target: '大气污染及其防治'
    },
    {
      source: '环境科学',
      target: '水污染及其防治'
    },
    {
      source: '环境科学',
      target: '固体废物的处理和利用'
    },
    {
      source: '环境科学',
      target: '环境管理'
    },
    {
      source: '环境科学',
      target: '可持续发展与清洁生产'
    },
    {
      source: '环境科学',
      target: '绿色化学与化工基础'
    },
    {
      source: '人类活动与环境问题',
      target: '生态学基本原理'
    },
    {
      source: '人类活动与环境问题',
      target: '人口与环境'
    },
    {
      source: '人类活动与环境问题',
      target: '土地资源的利用和保护'
    },
    {
      source: '人类活动与环境问题',
      target: '能源利用与保护'
    },
    {
      source: '大气污染及其防治',
      target: '大气结构与组成'
    },
    {
      source: '大气污染及其防治',
      target: '主要大气污染物及其来源'
    },
    {
      source: '大气污染及其防治',
      target: '污染物在大气中的迁移和扩散'
    },
    {
      source: '大气污染及其防治',
      target: '大气污染综合防治'
    },
    {
      source: '大气污染及其防治',
      target: '大气污染治理技术简介'
    },
    {
      source: '水污染及其防治',
      target: '水体的污染与自净'
    },
    {
      source: '水污染及其防治',
      target: '水体中主要污染物的来源及其危害'
    },
    {
      source: '水污染及其防治',
      target: '污水处理技术概述'
    },
    {
      source: '固体废物的处理和利用',
      target: '固体废物的处理技术'
    },    {
      source: '固体废物的处理和利用',
      target: '固体废物的资源化与回收利用'
    },    {
      source: '固体废物的处理和利用',
      target: '城市垃圾的处理'
    },    {
      source: '环境管理',
      target: '环境保护法'
    }, {
      source: '环境管理',
      target: '环境管理的基本制度'
    }, {
      source: '环境管理',
      target: '环境标准'
    }, {
      source: '环境管理',
      target: '环境监测'
    }, {
      source: '可持续发展与清洁生产',
      target: '可持续发展战略'
    },{
      source: '可持续发展与清洁生产',
      target: '清洁生产'
    },{
      source: '可持续发展与清洁生产',
      target: '循环经济'
    },{
      source: '可持续发展与清洁生产',
      target: '工业生态学与生态工业园'
    },{
      source: '绿色化学与化工基础',
      target: '绿色化学与原子经济性反应'
    },{
      source: '绿色化学与化工基础',
      target: '无毒无害反应剂和溶剂'
    },{
      source: '绿色化学与化工基础',
      target: '环境友好催化剂'
    },{
      source: '绿色化学与化工基础',
      target: '可再生的物质资源'
    },{
      source: '绿色化学与化工基础',
      target: '绿色化学产品'
    }
  ]
};

myChart.hideLoading();
graph.nodes.forEach(function (node) {
  node.label = {
    show: true
  };
});
option = {
  title: {
    text: '环境科学知识图谱',
    subtext: '默认布局',
    top: 'bottom',
    left: 'right'
  },
  tooltip: {},
  legend: [
    {
      // selectedMode: 'single',
      data: graph.categories.map(function (a) {
        return a.name;
      })
    }
  ],
  animationDuration: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      name: '环境科学',
      type: 'graph',
      layout: 'force',
      data: graph.nodes,
      links: graph.links,
      categories: graph.categories,
      roam: true,
      label: {
        position: 'right',
        formatter: '{b}'
      },
      lineStyle: {
        color: 'source',
        curveness: 0.3
      },
      emphasis: {
        focus: 'adjacency',
        lineStyle: {
          width: 10
        }
      },
      force: {
        repulsion: 500,
        edgeLength: [100, 200]
      }
    }
  ]
};
myChart.setOption(option);
