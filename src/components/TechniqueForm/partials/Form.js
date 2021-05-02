import React from 'react'
import { useFormContext } from 'react-hook-form'
import { TextFields } from './TextFields'
import { SliderFields } from './SliderFields'
import { ExtrasFields } from './ExtrasFields'
import Button from '@material-ui/core/Button'

export function Form({ onSubmit }) {
  const { register, handleSubmit, getError } = useFormContext()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFields register={register} getError={getError} />
      <SliderFields />
      <ExtrasFields />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        fullWidth
      >
        Salvar
      </Button>
    </form>
  )
}
