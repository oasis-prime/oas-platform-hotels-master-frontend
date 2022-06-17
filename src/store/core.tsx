import {
  Action,
  ThunkAction,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

import { authSlice } from "./auth";

const reducers = combineReducers({
  auth: authSlice.reducer,
});

let persistedState = {};
if (typeof window !== "undefined") {
  persistedState = localStorage.getItem("root")
    ? JSON.parse(localStorage.getItem("root") as string)
    : {};
}

export const reduxStoreMain = configureStore({
  preloadedState: persistedState,
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
});

reduxStoreMain.subscribe(() => {
  localStorage.setItem("root", JSON.stringify(reduxStoreMain.getState()));
});

export type AppDispatch = typeof reduxStoreMain.dispatch;
export type RootState = ReturnType<typeof reduxStoreMain.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
