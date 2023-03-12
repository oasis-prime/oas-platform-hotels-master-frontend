import { User } from 'firebase/auth'
import { create } from 'zustand'

// type IAuthInitialState = {
//     user: User | null;
//     loading: boolean;
//   };

//   const authInitialState = {
//     user: null,
//     loading: false,
//   }

interface modalState {
  user: User | null;
  loading: boolean;
  setLoading: (loading: boolean) => void
  setUser: (user: User | null) => void
}

const useAuth = create<modalState>((set) => ({
  user: null,
  loading: false,
  setLoading: (loading) => {
    set((state) => ({
      ...state,
      loading: loading,
    }))
  },
  setUser: (user) => {
    set((state) => ({
      ...state,
      user: user,
      loading: false,
    }))
  },
}))

export default useAuth
