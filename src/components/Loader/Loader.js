import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { LoaderBackdrop } from './styles'

export function Loader() {
  return (
    <LoaderBackdrop open={true}>
      <CircularProgress color="inherit" />
    </LoaderBackdrop>
  )
}
