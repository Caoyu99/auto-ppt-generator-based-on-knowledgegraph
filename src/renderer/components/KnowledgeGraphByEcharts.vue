<template>
  <div ref="chart" class="chart"></div>
</template>

<script lang="ts">
//@ts-nocheck
import { defineComponent,watch } from 'vue'
import * as echarts from 'echarts'
import useOption from '../hooks/useOption'
import { useStore } from '../store'
import useData from '../hooks/useData'
const { defaultKg } = useData()
export default defineComponent({

  mounted() {
    // 获取 Echarts 实例
    const store = useStore()
    const chart = echarts.init(this.$refs.chart)
    const nodes = store.kgData.nodes.length>0? store.kgData.nodes:defaultKg.nodes 
    const links = store.kgData.links.length>0? store.kgData.links:defaultKg.links 
    const {generateOption} = useOption()
    const option = generateOption(nodes,links)
    // 渲染图表
    chart.setOption(option)
    watch(() => store.kgData, (newVal) => {
      const nodes = newVal.nodes.length > 0 ? newVal.nodes : defaultKg.nodes
      const links = newVal.links.length > 0 ? newVal.links : defaultKg.links
      const option = generateOption(nodes, links)
      chart.setOption(option)
    })
  }
})
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>