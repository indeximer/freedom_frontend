import { useCallback } from 'react'
import { useLoader } from '@/contexts/Loader'
import { useAuthenticationContext } from '@/contexts/Authentication'
import { useMessageEmitter } from '@/contexts/MessageEmitter'
import { useNavigation } from '@/hooks'
import { useTechniquesService } from '@/services'

export function useFormSubmit() {
  const { createTechnique } = useTechniquesService()
  const { openLoader, closeLoader } = useLoader()
  const { emitSuccessMessage } = useMessageEmitter()
  const { navigateTo } = useNavigation()
  const {
    user: { email }
  } = useAuthenticationContext()

  const formatPayload = useCallback(
    formData => {
      const difficulty =
        formData.power +
        formData.target +
        formData.range +
        formData.casting_time +
        formData.duration +
        formData.restrictions +
        formData.extras
      const formattedPayload = { ...formData, difficulty, user: email }
      return formattedPayload
    },
    [email]
  )

  const submitTechnique = useCallback(
    async formData => {
      openLoader()
      await createTechnique(formatPayload(formData))
      closeLoader()
      emitSuccessMessage('Sua técnica foi criada com sucesso!')
      navigateTo('/techniques')
    },
    [
      openLoader,
      closeLoader,
      formatPayload,
      createTechnique,
      emitSuccessMessage,
      navigateTo
    ]
  )
  return { submitTechnique }
}
