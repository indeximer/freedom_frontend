import React from 'react'
import { AuthenticationContext } from './AuthenticationContext'
import { useMessageEmitter } from '@/contexts/MessageEmitter'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from '@/config/firebase'
import 'firebase/auth'

import { Splash } from '@/components/Splash'

export function AuthenticationProvider({ children }) {
  const [user, loading, error] = useAuthState(firebase.auth())
  const { emitErrorMessage } = useMessageEmitter()

  const logIn = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      emitErrorMessage(e.message)
    }
  }

  const logOut = () => firebase.auth().signOut()

  const passwordRecover = email => firebase.auth().sendPasswordResetEmail(email)

  const register = (email, password, displayName) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => result.user.updateProfile({ displayName }))

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
