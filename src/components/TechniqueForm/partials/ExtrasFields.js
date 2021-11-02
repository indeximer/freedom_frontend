import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useFormContext } from 'react-hook-form'
import { SliderInput } from '@/components/SliderInput'
import { fields } from './constants'

export function ExtrasFields() {
  const { register, getError, setValue } = useFormContext()
  const STEP = 3

  return (
    <>
      <SliderInput
        label="Restrições"
        min={-6}
        max={0}
        step={STEP}
        name={fields.restrictions}
        inputRef={register}
        onChange={setValue}
      />
      <TextField
        variant="outlined"
        multiline
        minRows={3}
        name={fields.restrictionsDescription}
        helperText={getError(fields.restrictionsDescription)}
        error={!!getError(fields.restrictionsDescription)}
        label="Descrição das restrições"
        inputRef={register}
      />
      <SliderInput
        label="Extras"
        min={-6}
        max={6}
        step={STEP}
        name={fields.extras}
        inputRef={register}
        onChange={setValue}
      />
      <TextField
        variant="outlined"
        multiline
        minRows={3}
        name={fields.extrasDescription}
        helperText={getError(fields.extrasDescription)}
        error={!!getError(fields.extrasDescription)}
        label="Descrição dos extras"
        inputRef={register}
        onChange={setValue}
      />
    </>
  )
}
