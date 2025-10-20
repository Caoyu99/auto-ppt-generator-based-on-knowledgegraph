export interface KnowledgeGraph {
  nodes: Node[]
  links: Link[]
}
type Node = {
  name: string
  id: number
}
type Link = {
  source: string
  target: string
}
