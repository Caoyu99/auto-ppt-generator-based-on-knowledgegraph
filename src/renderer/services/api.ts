import {request} from './request'
import { KnowledgeGraph } from '../types/types'

export function getPPTData(data:string) {
    return request<string>({url:'/api/dialogue',data: { prompt: data }})
}

export function getKgData(data:string) {
    return request<string>({url:'/api/dialogue',data: { prompt: data }})
}