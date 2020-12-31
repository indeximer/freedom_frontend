import React from 'react'
import { AuthenticationContext } from './AuthenticationContext'
import { useMessageEmitter } from '@/contexts/MessageEmitter'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from '@/config/firebase'
import 'firebase/auth'

import { Splash } from '@/components/Splash'

export function AuthenticationProvider({ children }) {
  const [user, loading, error] = useAuthState(firebase.auth())
  const { emitErrorMessage, emitSuccessMessage } = useMessageEmitter()

  const logIn = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      emitErrorMessage(e.message)
    }
  }

  const logOut = () => firebase.auth().signOut()

  const passwordRecover = async email => {
    try {
      await firebase.auth().sendPasswordResetEmail(email)
      emitSuccessMessage(
        'Um mensagem para a recuperação de sua senha foi enviado, verifica seu e-mail.'
      )

      return { success: true }
    } catch (e) {
      emitErrorMessage(e.message)
    }
  }

  const register = async (email, password, displayName) => {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      await user.updateProfile({ displayName })
      return user
    } catch (e) {
      emitErrorMessage(e.message)
    }
  }

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
