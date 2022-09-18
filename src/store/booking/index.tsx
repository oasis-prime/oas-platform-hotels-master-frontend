import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type IBookingInitialState = {
  adults: number | null
  boardCode: string | null
  boardName: string | null
  checkIn: Date | null
  checkOut: Date | null
  children: number | null
  discount: number | null
  hotelCode: string | null
  hotelLocation: string | null
  hotelName: string | null
  loading: boolean
  net: number | null
  rateKey: number | null
  rooms: number | null
  sellingRate: number | null
}

const bookingInitialState: IBookingInitialState = {
  adults: null,
  boardCode: null,
  boardName: null,
  checkIn: null,
  checkOut: null,
  children: null,
  discount: null,
  hotelCode: null,
  hotelLocation: null,
  hotelName: null,
  loading: false,
  net: null,
  rateKey: null,
  rooms: null,
  sellingRate: null,
}

type ISetBooking = PayloadAction<IBookingInitialState>;
type ISetLoading = PayloadAction<{ loading: boolean }>;

const bookingSlice = createSlice({
  name: 'booking',
  initialState: bookingInitialState,
  reducers: {
    setBooking(state, action: ISetBooking) {
      return Object.assign({}, state, action.payload)
    },
    setLoading(state, action: ISetLoading) {
      return Object.assign({}, state, { loading: action.payload.loading })
    },
    reset() {
      return Object.assign({}, bookingInitialState)
    },
  },
})

export { bookingSlice }
