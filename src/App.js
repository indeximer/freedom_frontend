import React from 'react'
import { AuthenticationProvider } from './contexts/Authentication'
import AppRouter from './routes'

export default function App() {
  return (
    <AuthenticationProvider>
      <AppRouter />
    </AuthenticationProvider>
  )
}
