import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useFormContext } from 'react-hook-form'

export function ExtrasFields() {
  const { register, getError } = useFormContext()
  const fields = {
    restrictionsDescription: 'restriction_description',
    extrasDescription: 'extras_description'
  }
  return (
    <>
      <TextField
        variant="outlined"
        name={fields.restrictionsDescription}
        helperText={getError(fields.restrictionsDescription)}
        error={!!getError(fields.restrictionsDescription)}
        label="Descrição das restrições"
        inputRef={register}
      />
      <TextField
        variant="outlined"
        name={fields.extrasDescription}
        helperText={getError(fields.extrasDescription)}
        error={!!getError(fields.extrasDescription)}
        label="Descrição dos extras"
        inputRef={register}
      />
    </>
  )
}
