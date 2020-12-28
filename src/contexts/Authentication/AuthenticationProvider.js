import React from 'react'
import { AuthenticationContext } from './AuthenticationContext'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from '@/config/firebase'
import 'firebase/auth'

import { Splash } from '@/components/Splash'

export function AuthenticationProvider({ children }) {
  const [user, loading, error] = useAuthState(firebase.auth())

  const logIn = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password)

  const logOut = () => firebase.auth().signOut()

  const passwordRecover = email => firebase.auth().sendPasswordResetEmail(email)

  const register = (email, password) =>
    firebase.auth().createUserWithEmailAndPassword(email, password)

  const isAuthenticated = () => {
    if (!loading && user) return true
    return false
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        logIn,
        logOut,
        isAuthenticated,
        passwordRecover,
        register
      }}
    >
      {error && <p>Erro tentando autenticar...</p>}
      {loading ? <Splash /> : children}
    </AuthenticationContext.Provider>
  )
}
