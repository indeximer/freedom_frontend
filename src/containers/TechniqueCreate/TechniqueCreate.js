import React from 'react'
import { useFormSubmit } from './hooks/useFormSubmit'
import { TechniqueForm } from '@/components/TechniqueForm'

export function TechniqueCreateContainer() {
  const { createTechnique } = useFormSubmit()

  return <TechniqueForm onSubmit={createTechnique} />
}
