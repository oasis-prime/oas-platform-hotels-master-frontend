import { AppDispatch, RootState } from '@store/core'
import {
  TypedUseSelectorHook,
  useDispatch as ud,
  useSelector as us,
} from 'react-redux'

export const useDispatch = () => ud<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = us