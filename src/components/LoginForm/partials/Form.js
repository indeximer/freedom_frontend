import React from 'react'
import { useFormContext } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export function Form({ onSubmit }) {
  const PATH_EMAIL = 'email'
  const PATH_PASSWORD = 'password'
  const { register, handleSubmit, getError } = useFormContext()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant="outlined"
        label="E-mail"
        name={PATH_EMAIL}
        error={getError(PATH_EMAIL)}
        helperText={getError(PATH_EMAIL)}
        inputRef={register}
      />
      <TextField
        variant="outlined"
        label="Senha"
        type="password"
        name={PATH_PASSWORD}
        error={getError(PATH_PASSWORD)}
        helperText={getError(PATH_PASSWORD)}
        inputRef={register}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        fullWidth
      >
        Acessar
      </Button>
    </form>
  )
}
