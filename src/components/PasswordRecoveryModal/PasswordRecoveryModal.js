import React, { useCallback } from 'react'
import { useValidation } from './hooks/useValidation'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export function PasswordRecoveryModal({ onSubmit, open, handleClose }) {
  const { validationResolver } = useValidation()
  const { register, handleSubmit, errors } = useForm({
    resolver: validationResolver
  })
  const PATH_EMAIL = 'email'

  const getError = useCallback(
    fieldName => errors[`${fieldName}`]?.message || false,
    [errors]
  )

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Recuperar senha</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <DialogContentText>
            Informe o seu e-mail cadastrado que enviaremos um link para que
            possa recadastrar sua senha.
          </DialogContentText>
          <TextField
            variant="outlined"
            label="E-mail"
            name={PATH_EMAIL}
            error={getError(PATH_EMAIL)}
            helperText={getError(PATH_EMAIL)}
            inputRef={register}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button type="submit" color="primary">
            Enviar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
