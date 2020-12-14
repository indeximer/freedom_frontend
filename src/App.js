import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import { AuthenticationProvider } from '@/contexts/Authentication'
import { ServiceProvider } from '@/contexts/Service'
import AppRouter from './routes'
import { GlobalStyle } from '@/components/GlobalStyles'

export default function App() {
  return (
    <AuthenticationProvider>
      <ServiceProvider>
        <StylesProvider injectFirst>
          <GlobalStyle />
          <AppRouter />
        </StylesProvider>
      </ServiceProvider>
    </AuthenticationProvider>
  )
}
