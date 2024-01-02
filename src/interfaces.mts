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

export type FoodJournalEntries = FoodJournalEntry[]

export interface FoodJournalEntry {
  id: number
  images: string[]
  date: string
  price?: number
  description: string
}
