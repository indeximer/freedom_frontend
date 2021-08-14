import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { StyledContent } from './styles'

export function Content({ children, gutterBot = 30, spacing = false }) {
  const theme = useTheme()
  const defaultSpacing = useMediaQuery(theme.breakpoints.down('sm')) ? 2 : 4
  const gridSpacing = spacing || defaultSpacing

  return (
    <StyledContent gutterBot={gutterBot}>
      <Grid container spacing={gridSpacing}>
        {children}
      </Grid>
    </StyledContent>
  )
}
