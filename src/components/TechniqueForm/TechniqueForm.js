import React, { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Form } from './partials/Form'
import { useValidation } from './hooks/useValidation'

export function TechniqueForm({ onSubmit, skills }) {
  const { validationResolver } = useValidation()
  const methods = useForm({ resolver: validationResolver })
  const { errors } = methods
  const getError = useCallback(
    fieldName => errors[`${fieldName}`]?.message || false,
    [errors]
  )
  return (
    <FormProvider {...methods} getError={getError}>
      <Form onSubmit={onSubmit} />
    </FormProvider>
  )
}
