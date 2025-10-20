import * as api from '../services/api'
import { KnowledgeGraph } from '../types/types'
export default function useData() {
  const pptPrompt = `帮我把纯文字转成如下结构，这个结构代表的是一个PPT，有标题页、目录页、内容页，
  其中目录页中的内容按1、2、3...编写，内容页的数量也必须对照目录页。结构中的注释请在结果中忽略，xxx代表需要你填入的内容。
    xxx     //这部分应该填标题
    =====
    1.xxx  //这部分应该填入目录
    2.xxx
    3.xxx
    =====
    xxx    //这部分应该填入内容
    =====
    xxx    //这部分应该填入内容
    =====
    xxx    //这部分应该填入内容
    
    结果请放在名为pptData的es6模板字符串中
    
    纯文字如下：`

    const pptData = `
    地球的形成和演化
    =====
    1.星云假说
    2.地球的形成和演化过程
    3.地球上的原始生命
    =====
    根据“星云假说”的解释，距今大约60亿年以前，地球的轮廓尚未形
    成，是一团没有凝聚在一起的混杂着大量宇宙尘埃的星云状气尘物
    质，到距今大约45亿～20亿年前这段时期，地球星体和原始的地理
    环境逐渐形成。随着地球物质分异过程的持续进行，多种原始火山
    气体（如CO2、CH4、NH3、H2S等）上升至地表形成了原始的大气圈。
    =====
    随着地球内部温度的升高，原来存在于地球内部的结晶水大量蒸发
    进入地球表面的原始大气层，冷凝后形成大气降水，在地球表面逐
    渐形成了河流、湖泊和海洋等水体。
    =====
    在地球的原始地理环境刚刚形成的时候，地球上没有生物（当然更
    没有人类），只有原子、分子的化学及物理运动。地球形成的初期
    ，大气中没有氧和臭氧，辐射到地球表面的紫外线十分强烈，而海
    洋中由于水层能挡住紫外线和宇宙射线，加上海水具有流动性、恒
    温性、不恒压性以及巨大的气-液界面和固-液界面等特点，有利于
    物质的积累、浓缩、迁移和充分利用太阳能，并有利于发生化学、
    物理和生物的变化，于是，海洋成为原始生命的诞生地、保护伞和
    储存库。
    `;


  const kgPrompt = 
  `帮我将纯文字填入以下数据结构，我只需要数据结构数据。
  这个数据结构代表的是一个知识图谱，它包含结点数组和连接数组，结点数量不要太多，尽量在20个以内。注意结果只要json对象数据。
    interface KnowLedgeGraph{
      nodes:Node[]
      links:Link[]
    }
    type Node = {
      name: string
      id: number
    }
    type Link = {
      source: string
      target: string
    }
    
    请以json对象返回你的结果，要求符合以上结构
    
    纯文字如下：`

  const defaultKg: KnowledgeGraph = {
    nodes: [
      { name: '环境科学', id: 1 },
      { name: '大气污染及其防治', id: 2 },
      { name: '水污染及其防治', id: 3 },
      { name: '土壤污染及其防治', id: 4 },
      { name: '环境管理', id: 5 },
      { name: '环境法律法规', id: 6 },
      { name: '可持续发展', id: 7 },
      { name: '人类活动与环境问题', id: 8 },
      { name: '绿色化学', id: 9 },
      { name: '日常环境保护', id: 10 },
      { name: '环境污染与人类健康', id: 11 },
    ],
    links: [
      { source: '环境科学', target: '大气污染及其防治' },
      { source: '环境科学', target: '水污染及其防治' },
      { source: '环境科学', target: '土壤污染及其防治' },
      { source: '环境科学', target: '环境管理' },
      { source: '环境科学', target: '环境法律法规' },
      { source: '环境科学', target: '可持续发展' },
      { source: '环境科学', target: '人类活动与环境问题' },
      { source: '环境科学', target: '绿色化学' },
      { source: '环境科学', target: '日常环境保护' },
      { source: '环境科学', target: '环境污染与人类健康' },
    ],
  }
  const defaultKg2: KnowledgeGraph =   {nodes: [
    {
      name: '环境科学',
      id : 1
    },
    {
      name: '人类活动与环境问题',
      id : 2
    },
    {
      name: '大气污染及其防治',
      id : 3
    },
    {
      name: '水污染及其防治',
      id : 4
    },
    {
      name: '固体废物的处理和利用',
      id : 5
    },
    {
      name: '环境管理',
      id : 6
    },
    {
      name: '可持续发展与清洁生产',
      id : 7
    },
    {
      name: '绿色化学与化工基础',
      id : 8
    },
    {
      name: '生态学基本原理',
      id : 9
    },
    {
      name: '人口与环境',
      id : 10
    },
    {
      name: '土地资源的利用和保护',
      id : 11
    },
    {
      name: '能源利用与保护',
      id : 12
    },
    {
      name: '大气结构与组成',
      id : 13
    },
    {
      name: '主要大气污染物及其来源',
      id : 14
    },
    {
      name: '污染物在大气中的迁移和扩散',
      id : 15
    },
    {
      name: '大气污染综合防治',
      id : 16
    },
    {
      name: '大气污染治理技术简介',
      id : 17
    },
    {
      name: '水体的污染与自净',
      id : 18
    },
    {
      name: '水体中主要污染物的来源及其危害',
      id : 19
    },
    {
      name: '污水处理技术概述',
      id : 20
    },
    {
      name: '固体废物的处理技术',
      id : 21
    },
    {
      name: '固体废物的资源化与回收利用',
      id : 22
    },
    {
      name: '城市垃圾的处理',
      id : 23
    },
    {
      name: '环境保护法',
      id : 24
    },
    {
      name: '环境管理的基本制度',
      id : 25
    },
    {
      name: '环境标准',
      id : 26
    },
    {
      name: '环境监测',
      id : 27
    },
    {
      name: '可持续发展战略',
      id : 28
    },
    {
      name: '清洁生产',
      id : 29
    },
    {
      name: '循环经济',
      id : 30
    },
    {
      name: '工业生态学与生态工业园',
      id : 31
    },
    {
      name: '绿色化学与原子经济性反应',
      id : 32
    },
    {
      name: '无毒无害反应剂和溶剂',
      id : 33
    },
    {
      name: '绿色化学产品',
      id : 34
    },
    {
      name: '可再生的物质资源',
      id : 35
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
  const getPPTData = async (data: string) => {
    console.log('ppt')
    const result = await api.getPPTData(data)
    console.log(result)
    const start = result.indexOf('pptData = `') + 11
    const pptData = result.substring(start).trim().replace(/[ \t]+/g, "")
    return pptData
  }
  const getKgData = async (data: string) => {
    console.log('kg')
    const result = await api.getKgData(data)
    console.log(result)
    const kgData = JSON.parse(result.replace(/\\/g, '\\\\'))
    return kgData
  }
  return {
    defaultKg,
    getPPTData,
    pptPrompt,
    kgPrompt,
    getKgData,
  }
}
