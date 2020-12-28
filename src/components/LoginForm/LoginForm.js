import React, { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useValidation } from './hooks/useValidation'
import { Form } from './partials/Form'

export function LoginForm({ onSUbmit }) {
  const { validationResolver } = useValidation()
  const methods = useForm({ resolver: validationResolver })
  const { errors } = methods

  const getError = useCallback(
    fieldName => errors[`${fieldName}`]?.message || false,
    [errors]
  )

  return (
    <FormProvider {...methods} getError={getError}>
      <Form onSubmit={onSUbmit} />
    </FormProvider>
  )
}
