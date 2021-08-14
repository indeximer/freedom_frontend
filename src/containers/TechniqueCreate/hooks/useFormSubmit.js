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
  const { user } = useAuthenticationContext()

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
      const formattedPayload = {
        ...formData,
        difficulty,
        user: user.uid,
        created_at: Date.now()
      }
      return formattedPayload
    },
    [user]
  )

  const submitTechnique = useCallback(
    async formData => {
      console.log(formData)
      // openLoader()
      // await createTechnique(formatPayload(formData))
      // closeLoader()
      // navigateTo('/techniques')
      // emitSuccessMessage('Sua técnica foi criada com sucesso!')
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
