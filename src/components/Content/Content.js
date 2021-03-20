import React from 'react'
import Grid from '@material-ui/core/Grid'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

export function Content({ children }) {
  const theme = useTheme()
  const gridSpacing = useMediaQuery(theme.breakpoints.down('sm')) ? 2 : 4

  return (
    <Grid container spacing={gridSpacing}>
      {children}
    </Grid>
  )
}
