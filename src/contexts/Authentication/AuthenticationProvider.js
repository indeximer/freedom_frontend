import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from '@/config/firebase'
import 'firebase/auth'
import { AuthenticationContext } from './AuthenticationContext'

export function AuthenticationProvider({ children }) {
  const [user, loading, error] = useAuthState(firebase.auth())

  const logIn = (email, senha) =>
    firebase.auth().signInWithEmailAndPassword(email, senha)

  const logOut = () => firebase.auth().signOut()

  const passwordRecover = email => firebase.auth().sendPasswordResetEmail(email)

  const register = (email, senha) =>
    firebase.auth().createUserWithEmailAndPassword(email, senha)

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
      {loading ? <p>CARREGANDO AUTENTICAÇÃO ...</p> : children}
    </AuthenticationContext.Provider>
  )
}
