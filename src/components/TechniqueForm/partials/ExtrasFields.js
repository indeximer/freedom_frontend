import React from 'react'
import TextField from '@material-ui/core/TextField'

export function ExtrasFields() {
  return (
    <>
      <TextField
        variant="outlined"
        name="restrictions-description"
        label="Descrição das restrições"
      />
      <TextField
        variant="outlined"
        name="extras-description"
        label="Descrição dos extras"
      />
    </>
  )
}
