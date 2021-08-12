import React, { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Form } from './partials/Form'
import { useValidation } from './hooks/useValidation'
import { Content } from '@/components/Content'

export function TechniqueForm({ onSubmit }) {
  const { validationResolver } = useValidation()
  const methods = useForm({ resolver: validationResolver })
  const { errors } = methods
  const getError = useCallback(
    fieldName => errors[`${fieldName}`]?.message || false,
    [errors]
  )
  return (
    <Content gutterBot={true}>
      <FormProvider {...methods} getError={getError}>
        <Form onSubmit={onSubmit} />
      </FormProvider>
    </Content>
  )
}
