import create from 'zustand'

interface modalState {
  signIn: boolean
  signUp: boolean
  setSignIn: (show: boolean) => void
  setSignUp: (show: boolean) => void
}

const useModal = create<modalState>((set) => ({
  signIn: false,
  signUp: false,
  setSignIn: (show: boolean) => {
    set((state) => ({
      ...state,
      signUp: false,
      signIn: show,
    }))
  },
  setSignUp: (show: boolean) => {
    set((state) => ({
      ...state,
      signUp: show,
      signIn: false,
    }))
  },
}))

export default useModal
