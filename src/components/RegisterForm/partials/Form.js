import React from 'react'
import { useFormContext } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export function Form({ onSubmit }) {
  const PATH_DISPLAY_NAME = 'displayName'
  const PATH_EMAIL = 'email'
  const PATH_PASSWORD = 'password'
  const PATH_PASSWORD_CONFIRMATION = 'passwordConfirmation'
  const { register, handleSubmit, getError } = useFormContext()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant="outlined"
        label="Nickname"
        name={PATH_DISPLAY_NAME}
        error={getError(PATH_DISPLAY_NAME)}
        helperText={
          getError(PATH_DISPLAY_NAME) ||
          'Informe o nome pelo qual gostaria de ser reconhecido.'
        }
        inputRef={register}
      />
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
        helperText={
          getError(PATH_PASSWORD) || 'A senha deve ter ao menos 6 caracteres.'
        }
        inputRef={register}
      />
      <TextField
        variant="outlined"
        label="Confirme sua senha"
        type="password"
        name={PATH_PASSWORD_CONFIRMATION}
        error={getError(PATH_PASSWORD_CONFIRMATION)}
        helperText={getError(PATH_PASSWORD_CONFIRMATION)}
        inputRef={register}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        fullWidth
      >
        Cadastrar
      </Button>
    </form>
  )
}
