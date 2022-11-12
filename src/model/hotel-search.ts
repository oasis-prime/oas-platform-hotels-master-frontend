type IHotelsSearch = {
  name?: string
  rooms: number
  adults: number
  children: number
  checkIn: Date
  checkOut: Date
  latitude?: number
  longitude?: number
}

type IHotelsDetailSearch = IHotelsSearch & {
  code: number
  type: string
}

type IHotelsBooking = {
  holder: {
    name: string
    surname: string
  }
  rateKey: string
  paxes: IHotelsPaxes[]
  clientReference: string
  remark: string
  tolerance: number
  email: string
  phoneNumber: string
  acceptPolicy: boolean
}

type IHotelsPaxes = {
  'roomId': number
  'type': string
  'name': string
  'surname': string
}

export type { IHotelsSearch, IHotelsDetailSearch, IHotelsBooking }
