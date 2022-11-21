type TSignUp = {
  display: string
  email: string
  password: string
  confirmPassword: string
}

type TSignIn = {
  email: string
  password: string
}

export type { TSignUp, TSignIn }