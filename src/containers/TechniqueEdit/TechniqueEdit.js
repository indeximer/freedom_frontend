import React from 'react'
import { useFormSubmit } from './hooks/useFormSubmit'
import { TechniqueForm } from '@/components/TechniqueForm'

export function TechniqueEditContainer() {
  const { submitTechnique } = useFormSubmit()

  return <TechniqueForm onSubmit={submitTechnique} technique={{}} />
}
