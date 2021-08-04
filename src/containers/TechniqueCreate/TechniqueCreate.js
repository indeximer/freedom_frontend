import React, { useCallback } from 'react'
import { useLoader } from '@/contexts/Loader'
import { TechniqueForm } from '@/components/TechniqueForm'

export function TechniqueCreateContainer() {
  const { openLoader, closeLoader } = useLoader()

  const handleSubmit = useCallback(
    formData => {
      openLoader()
      console.log('###### SUBMIT!!!', formData)
    },
    [openLoader]
  )

  return <TechniqueForm onSubmit={handleSubmit} />
}
