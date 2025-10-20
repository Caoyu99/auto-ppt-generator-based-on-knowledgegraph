import { ref } from 'vue'

interface Node {
  name: string
  id: number
}
interface Link {
  source: string
  target: string
  relation: string
}

export default function useOption() {
  function generateOption(nodes: Node[], links: Link[]) {
    const option = {
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'force',
          layoutSize: '100%',
          bounding: 'all',
          symbolSize: 60,
          roam: true,
          label: {
            show: true,
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            fontSize: 20,
          },
          data: nodes.map((node) => {
            return {
              name: node.name,
              draggable: true,
            }
          }),
          links: links.map((link) => {
            return {
              source: link.source,
              target: link.target,
              symbolSize: [5, 20],
              label: {
                show: false,
                formatter: link.relation,
              },
              lineStyle: {
                width: 5,
                curveness: 0.1,
              },
              emphasis: {
                color: 'blue',
              },
            }
          }),
          force: {
            repulsion: 1000,
          },
        },
      ],
    }
    return option
  }
  return { generateOption }
}
