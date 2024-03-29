import React, { useCallback } from 'react'
import { useValidation } from './hooks/useValidation'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import { TextField, InputBase } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import CheckIcon from '@material-ui/icons/Check'
import { get } from '@/utils'

export function SkillForm({ onSubmit, open, handleClose, skill }) {
  const { validationResolver } = useValidation()
  const { register, handleSubmit, errors } = useForm({
    resolver: validationResolver
  })
  const PATH_ID = 'id'
  const PATH_NAME = 'name'
  const PATH_CATEGORY = 'category'
  const PATH_DESCRIPTION = 'description'

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
      <DialogTitle id="form-dialog-title">Criar Skill</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <InputBase
            type="hidden"
            inputRef={register}
            name={PATH_ID}
            value={get(skill, 'id')}
          />
          <TextField
            variant="outlined"
            label="Nome"
            name={PATH_NAME}
            error={getError(PATH_NAME)}
            helperText={getError(PATH_NAME)}
            inputRef={register}
            defaultValue={get(skill, 'name', '')}
          />
          <TextField
            variant="outlined"
            label="Categoria"
            name={PATH_CATEGORY}
            error={getError(PATH_CATEGORY)}
            helperText={getError(PATH_CATEGORY)}
            inputRef={register}
            defaultValue={get(skill, 'category', '')}
          />
          <TextField
            variant="outlined"
            label="Descrição"
            name={PATH_DESCRIPTION}
            error={getError(PATH_DESCRIPTION)}
            helperText={getError(PATH_DESCRIPTION)}
            multiline
            minRows={3}
            inputRef={register}
            defaultValue={get(skill, 'description', '')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            startIcon={<CheckIcon />}
          >
            Salvar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
