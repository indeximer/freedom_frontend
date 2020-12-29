import React from 'react'
import { StyledContainer, StyledCol } from './styles'
import Grid from '@material-ui/core/Grid'

export function AccessAreaContainer({ children }) {
  return (
    <StyledContainer maxWidth={false}>
      <Grid container spacing={0} justify="flex-end">
        <StyledCol xs={12} sm={6} lg={4} item justify="center">
          {children}
        </StyledCol>
      </Grid>
    </StyledContainer>
  )
}
