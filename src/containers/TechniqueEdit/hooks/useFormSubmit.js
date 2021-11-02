import { useCallback } from 'react'
import { useLoader } from '@/contexts/Loader'
import { useMessageEmitter } from '@/contexts/MessageEmitter'
import { useNavigation } from '@/hooks'
import { useTechniquesService } from '@/services'

export function useFormSubmit() {
  const { updateTechnique } = useTechniquesService()
  const { openLoader, closeLoader } = useLoader()
  const { emitSuccessMessage } = useMessageEmitter()
  const { navigateTo } = useNavigation()

  const formatPayload = useCallback(formData => {
    const formattedPayload = {
      ...formData,
      updated_at: Date.now()
    }
    delete formattedPayload.id
    return formattedPayload
  }, [])

  const submitTechnique = useCallback(
    async formData => {
      openLoader()
      await updateTechnique(formData.id, formatPayload(formData))
      closeLoader()
      navigateTo('/techniques')
      emitSuccessMessage('Sua técnica foi alterada com sucesso!')
    },
    [
      openLoader,
      closeLoader,
      formatPayload,
      updateTechnique,
      emitSuccessMessage,
      navigateTo
    ]
  )
  return { submitTechnique }
}
