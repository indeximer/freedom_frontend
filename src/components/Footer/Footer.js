import React from 'react'
import { Grid, Container } from '@material-ui/core'
import { FooterWrapper } from './styles'

export function Footer({ children }) {
  return (
    <FooterWrapper>
      <Container>
        <Grid container alignItems="center">
          {children}
        </Grid>
      </Container>
    </FooterWrapper>
  )
}
