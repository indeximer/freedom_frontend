import { useCallback } from 'react'
import { useLoader } from '@/contexts/Loader'

export function useFormSubmit() {
  const { openLoader, closeLoader } = useLoader()
  const createTechnique = useCallback(
    formData => {
      openLoader()
      console.log('###### SUBMIT!!!', formData)
    },
    [openLoader]
  )
  return { createTechnique }
}
