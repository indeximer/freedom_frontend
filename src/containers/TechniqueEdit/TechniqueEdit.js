import React, { useEffect, useState } from 'react'
import { TechniqueForm } from '@/components/TechniqueForm'
import { useFormSubmit } from './hooks'
import { useParams } from 'react-router-dom'
import { useLoader } from '@/contexts/Loader'
import { useTechniquesService } from '@/services'

export function TechniqueEditContainer() {
  const { submitTechnique } = useFormSubmit()

  const [technique, setTechnique] = useState()
  const { getTechniqueById } = useTechniquesService()
  const { id } = useParams()
  const { openLoader, closeLoader } = useLoader()

  useEffect(() => {
    const fetchTechnique = async id => {
      openLoader()
      const techniqueResponse = await getTechniqueById(id)
      delete techniqueResponse.id
      delete techniqueResponse.user
      delete techniqueResponse.created_at
      delete techniqueResponse.updated_at
      setTechnique(techniqueResponse)
      closeLoader()
    }

    fetchTechnique(id)
  }, [id, getTechniqueById, setTechnique, openLoader, closeLoader])

  return (
    <>
      {technique && (
        <TechniqueForm onSubmit={submitTechnique} technique={technique} />
      )}
    </>
  )
}
