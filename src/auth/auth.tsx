import {
  FacebookAuthProvider,
  User,
  createUserWithEmailAndPassword,
  confirmPasswordReset as fConfirmPasswordReset,
  sendPasswordResetEmail as fSendPasswordResetEmail,
  signOut as fSignOut,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getApps, initializeApp } from 'firebase/app'

import { AppConfig } from '@utils/app.config'
import useAuth from '@store/useAuth'

const config = AppConfig.firebase

type AppContextInterface = {
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signUpFacebook: () => Promise<void>
  signOut: () => Promise<void>
  sendPasswordResetEmail: (email: string) => Promise<void>
  confirmPasswordReset: (password: string, oobCode: string) => Promise<void>
}

const AuthContext = createContext<AppContextInterface | null>(null)

export const useFirebaseAuth = () => useContext(AuthContext)

type Props = {
  children?: JSX.Element
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const auth = useAuthProvider()
  return <AuthContext.Provider value={auth}>{ children }</AuthContext.Provider>
}
// const action = bindActionCreators(authSlice.actions, reduxStoreMain.dispatch)

const useAuthProvider: () => AppContextInterface = () => {
  let firebaseApp
  if (!getApps().length) {
    firebaseApp = initializeApp(config)
  }
  const auth = getAuth(firebaseApp)
  const { setUser } = useAuth()
  // const user = useSelector((s) => s.auth)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        // action.setLoading({ loading: true })
      } else {
        setUser(null)
        // action.setUser({ user: null })
        // action.setLoading({ loading: false })
      }
    })

    return () => unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  const signUp = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
  }

  const signOut = async () => {
    await fSignOut(auth)
  }

  const signUpFacebook = async () => {
    const provider = new FacebookAuthProvider()

    signInWithPopup(auth, provider)
      .then((result) => {
      // The signed-in user info.
        const user = result.user

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result)
        const accessToken = credential?.accessToken

        console.log('user:', user)
        console.log('accessToken:', accessToken)
      // ...
      })
      .catch((error) => {
      // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.customData.email
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error)

        console.log('errorCode:', errorCode)
        console.log('errorMessage:', errorMessage)
        console.log('email:', email)
        console.log('credential:', credential)
      // ...
      })
  }

  const sendPasswordResetEmail = async (email: string) => {
    await fSendPasswordResetEmail(auth, email)
  }

  const confirmPasswordReset = async (password: string, oobCode: string) => {
    await fConfirmPasswordReset(auth, oobCode, password)
  }

  return {
    signIn,
    signUp,
    signUpFacebook,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset,
  }
}
