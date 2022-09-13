import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  User,
  createUserWithEmailAndPassword,
  confirmPasswordReset as fConfirmPasswordReset,
  sendPasswordResetEmail as fSendPasswordResetEmail,
  signOut as fSignOut,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { getApps, initializeApp } from 'firebase/app'

import { AppConfig } from '@utils/app.config'
import { authSlice } from '@store/auth'
import { bindActionCreators } from '@reduxjs/toolkit'
import { reduxStoreMain } from '@store/core'
import { useSelector } from '@utils/main.hooks'

const config = AppConfig.firebase

type AppContextInterface = {
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  sendPasswordResetEmail: (email: string) => Promise<void>
  confirmPasswordReset: (password: string, oobCode: string) => Promise<void>
}

const AuthContext = createContext<AppContextInterface | null>(null)

export const useAuth = () => useContext(AuthContext)

type Props = {
  children?: JSX.Element
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const auth = useAuthProvider()
  return <AuthContext.Provider value={auth}>{ children }</AuthContext.Provider>
}
const action = bindActionCreators(authSlice.actions, reduxStoreMain.dispatch)

const useAuthProvider: () => AppContextInterface = () => {
  let firebaseApp
  if (!getApps().length) {
    firebaseApp = initializeApp(config)
  }
  const auth = getAuth(firebaseApp)
  const user = useSelector((s) => s.auth)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        action.setUser({ user: user })
        action.setLoading({ loading: true })
      } else {
        action.setUser({ user: null })
        action.setLoading({ loading: false })
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

  const sendPasswordResetEmail = async (email: string) => {
    await fSendPasswordResetEmail(auth, email)
  }

  const confirmPasswordReset = async (password: string, oobCode: string) => {
    await fConfirmPasswordReset(auth, oobCode, password)
  }

  return {
    signIn,
    signUp,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset,
  }
}
