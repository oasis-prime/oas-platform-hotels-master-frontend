type IHotelsSearch = {
  name: string
  rooms: number
  adults: number
  children: number
  checkIn: Date
  checkOut: Date
}

type IHotelsDetailSearch = IHotelsSearch & {
  code: number
  type: string
}

export type { IHotelsSearch, IHotelsDetailSearch }
