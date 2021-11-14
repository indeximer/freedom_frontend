import { useCallback } from 'react'
import { useLoader } from '@/contexts/Loader'
import { useAuthenticationContext } from '@/contexts/Authentication'
import { useMessageEmitter } from '@/contexts/MessageEmitter'
import { useSkillsService } from '@/services'
import { formatPostPayload, formatPutPayload } from '@/utils'

export function useFormSubmit(setOpenModal) {
  const { createSkill, updateSkill } = useSkillsService()
  const { openLoader, closeLoader } = useLoader()
  const { emitSuccessMessage } = useMessageEmitter()
  const { user } = useAuthenticationContext()

  const submitSkill = useCallback(
    async formData => {
      let successMessage
      openLoader()
      if (formData.id) {
        await updateSkill(formData.id, formatPutPayload(formData))
        successMessage = 'Sua técnica foi alterada com sucesso!'
      } else {
        await createSkill(formatPostPayload(formData, user))
        successMessage = 'Sua técnica foi criada com sucesso!'
      }
      closeLoader()
      setOpenModal(false)
      emitSuccessMessage(successMessage)
    },
    [
      openLoader,
      closeLoader,
      createSkill,
      updateSkill,
      emitSuccessMessage,
      user,
      setOpenModal
    ]
  )
  return { submitSkill }
}
