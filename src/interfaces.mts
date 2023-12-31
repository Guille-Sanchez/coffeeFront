export type Cafeterias = Cafeteria[]

export interface Cafeteria {
  id: number
  name: string
  address: string
  maps: string
  description: string
  menu?: string
}
