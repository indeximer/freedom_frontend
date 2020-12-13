import React from 'react'
import { AuthenticationProvider } from '@/contexts/Authentication'
import { ServiceProvider } from '@/contexts/Service'
import AppRouter from './routes'

export default function App() {
  return (
    <AuthenticationProvider>
      <ServiceProvider>
        <AppRouter />
      </ServiceProvider>
    </AuthenticationProvider>
  )
}
