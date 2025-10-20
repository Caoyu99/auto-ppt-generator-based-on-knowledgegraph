import { defineStore } from 'pinia'

interface KnowledgeGraph{
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
interface State {
  message: string
  pptData: string
  kgData: KnowledgeGraph
}
export const useStore = defineStore({
  id: 'userInput',
  state: ():State => ({
    message: '',
    pptData:'',
    kgData:{
      nodes: [],
      links: []
    }
  }),
  actions: {
    setMessage(newMessage:string) {
      this.message = newMessage
    },
    setPptData(newPptData:string) {
      this.pptData = newPptData
    },
    setKgData(newKgData:KnowledgeGraph) {
      this.kgData = newKgData
    }
  },
})
