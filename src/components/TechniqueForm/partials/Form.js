import React from 'react'
import { Footer } from '@/components/Footer'
import { useFormContext } from 'react-hook-form'
import { TextFields } from './TextFields'
import { SliderFields } from './SliderFields'
import { ExtrasFields } from './ExtrasFields'
import { TotalField } from './TotalField'
import { Grid, Button } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'

export function Form({ onSubmit }) {
  const { handleSubmit } = useFormContext()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFields />
      <SliderFields />
      <ExtrasFields />

      <Footer>
        <Grid item xs={8} lg={10}>
          <TotalField />
        </Grid>
        <Grid item xs={4} lg={2}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
            startIcon={<CheckIcon />}
            fullWidth
          >
            Salvar
          </Button>
        </Grid>
      </Footer>
    </form>
  )
}
