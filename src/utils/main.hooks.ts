import { AppDispatch, RootState, reduxStoreMain } from '@store/core'
import {
  TypedUseSelectorHook,
  useDispatch as ud,
  useSelector as us
} from 'react-redux'

import { authSlice } from '@store/auth'
import { bindActionCreators } from '@reduxjs/toolkit'

export const useDispatch = () => ud<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = us