import { useCallback } from 'react'
import { useLoader } from '@/contexts/Loader'
import { useAuthenticationContext } from '@/contexts/Authentication'
import { useMessageEmitter } from '@/contexts/MessageEmitter'
import { useSkillsService } from '@/services'
import { formatPostPayload } from '@/utils'

export function useFormSubmit() {
  const { createSkill } = useSkillsService()
  const { openLoader, closeLoader } = useLoader()
  const { emitSuccessMessage } = useMessageEmitter()
  const { user } = useAuthenticationContext()

  const submitSkill = useCallback(
    async formData => {
      openLoader()
      await createSkill(formatPostPayload(formData, user))
      closeLoader()
      emitSuccessMessage('Sua técnica foi criada com sucesso!')
    },
    [openLoader, closeLoader, createSkill, emitSuccessMessage, user]
  )
  return { submitSkill }
}
