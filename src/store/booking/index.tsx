import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type IBookingInitialState = {
  user: string | null;
  loading: boolean;
};

const bookingInitialState: IBookingInitialState = {
  user: null,
  loading: false,
}

type ISetBooking = PayloadAction<{ user: string | null }>;
type ISetLoading = PayloadAction<{ loading: boolean }>;

const bookingSlice = createSlice({
  name: 'booking',
  initialState: bookingInitialState,
  reducers: {
    setUser(state, action: ISetBooking) {
      return Object.assign({}, state, { user: action.payload.user })
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
