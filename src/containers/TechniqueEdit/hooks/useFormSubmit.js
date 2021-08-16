import { useCallback } from 'react'
import { useLoader } from '@/contexts/Loader'
import { useAuthenticationContext } from '@/contexts/Authentication'
import { useMessageEmitter } from '@/contexts/MessageEmitter'
import { useNavigation } from '@/hooks'
import { useTechniquesService } from '@/services'

export function useFormSubmit() {
  const { updateTechnique } = useTechniquesService()
  const { openLoader, closeLoader } = useLoader()
  const { emitSuccessMessage, emitErrorMessage } = useMessageEmitter()
  const { navigateTo } = useNavigation()
  const { user } = useAuthenticationContext()

  const formatPayload = useCallback(formData => {
    const formattedPayload = {
      ...formData,
      updated_at: Date.now()
    }
    delete formattedPayload.id
    return formattedPayload
  })

  const submitTechnique = useCallback(
    async formData => {
      if (user.uid !== formData.user)
        return emitErrorMessage(
          'Você não tem permissão para editar esta Técnica'
        )
      openLoader()
      await updateTechnique(formData.id, formatPayload(formData))
      closeLoader()
      navigateTo('/techniques')
      emitSuccessMessage('Sua técnica foi criada com sucesso!')
    },
    [
      openLoader,
      closeLoader,
      formatPayload,
      updateTechnique,
      emitSuccessMessage,
      emitErrorMessage,
      user,
      navigateTo
    ]
  )
  return { submitTechnique }
}
