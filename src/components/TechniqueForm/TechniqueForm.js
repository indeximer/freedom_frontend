import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Form } from './partials/Form'

export function TechniqueForm({ onSubmit }) {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit} />
    </FormProvider>
  )
}
