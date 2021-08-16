import React, { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Form } from './partials/Form'
import { useValidation } from './hooks/useValidation'
import { Content } from '@/components/Content'
import { Grid } from '@material-ui/core'
import {
  fields,
  targets,
  buffs,
  range,
  duration,
  castingTime
} from './partials/constants'

export function TechniqueForm({ onSubmit, technique = {} }) {
  const { validationResolver } = useValidation()
  const methods = useForm({
    resolver: validationResolver,
    defaultValues: {
      [fields.powerDescription]: buffs[0].label,
      [fields.targetDescription]: targets[2].label,
      [fields.rangeDescription]: range[0].label,
      [fields.castingTimeDescription]: castingTime[1].label,
      [fields.durationDescription]: duration[0].label
    }
  })
  const { errors } = methods
  const getError = useCallback(
    fieldName => errors[`${fieldName}`]?.message || false,
    [errors]
  )
  return (
    <Content gutterBot={60}>
      <Grid item>
        <FormProvider {...methods} getError={getError} data={technique}>
          <Form onSubmit={onSubmit} />
        </FormProvider>
      </Grid>
    </Content>
  )
}
