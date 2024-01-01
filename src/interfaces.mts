export interface Cafeteria {
  id: number
  address: string
  maps: string
  description: string
  menu: string | null
  cafeteria_image: string
}

export interface Cafeterias {
  [name: string]: Cafeteria
}
