import React from 'react'

import { SplashContainer } from './styles'
import CircularProgress from '@material-ui/core/CircularProgress'

export function Splash() {
  return (
    <SplashContainer>
      <CircularProgress />
    </SplashContainer>
  )
}
