import React from 'react'
import { useFormContext } from 'react-hook-form'
import { TextFields } from './TextFields'
import { SliderFields } from './SliderFields'
import { ExtrasFields } from './ExtrasFields'
import Button from '@material-ui/core/Button'

export function Form({ onSubmit }) {
  const { handleSubmit } = useFormContext()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFields />
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
