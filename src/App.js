import React from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AuthenticationProvider } from '@/contexts/Authentication'
import { LoaderProvider } from '@/contexts/Loader'
import { MessageEmitterProvider } from '@/contexts/MessageEmitter'

import AppRouter from './routes'
import { GlobalStyle } from '@/components/GlobalStyles'

export default function App() {
  return (
    <StylesProvider injectFirst>
      <GlobalStyle />
      <CssBaseline />
      <MessageEmitterProvider>
        <AuthenticationProvider>
          <LoaderProvider>
            <AppRouter />
          </LoaderProvider>
        </AuthenticationProvider>
      </MessageEmitterProvider>
    </StylesProvider>
  )
}
