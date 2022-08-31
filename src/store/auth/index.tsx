import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { User } from "firebase/auth";

type IAuthInitialState = {
  user: User | null;
  loading: boolean;
};

const authInitialState = {
  user: null,
  loading: false,
};

type ISetUser = PayloadAction<{ user: User | null }>;
type ISetLoading = PayloadAction<{ loading: boolean }>;

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setUser(state, action: ISetUser) {
      return Object.assign({}, state, { user: action.payload.user });
    },
    setLoading(state, action: ISetLoading) {
      return Object.assign({}, state, { loading: action.payload.loading });
    },
    reset() {
      return Object.assign({}, authInitialState);
    },
  },
});

export { authSlice };
