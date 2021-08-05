import React from 'react'
import { useFormSubmit } from './hooks/useFormSubmit'
import { TechniqueForm } from '@/components/TechniqueForm'

export function TechniqueCreateContainer() {
  const { submitTechnique } = useFormSubmit()

  return <TechniqueForm onSubmit={submitTechnique} />
}
