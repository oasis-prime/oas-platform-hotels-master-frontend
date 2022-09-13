type IHotelsSearch = {
  name: string
  rooms: number
  adults: number
  children: number
  checkIn: Date
  checkOut: Date
}

type IHotelsDetailSearch = {
  code: number
  type: string
  rooms: number
  adults: number
  children: number
  checkIn: Date
  checkOut: Date
}

export type { IHotelsSearch, IHotelsDetailSearch }
