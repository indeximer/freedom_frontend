import { useCallback } from 'react'
import { useAuthenticationContext } from '@/contexts/Authentication'
import { useLoader } from '@/contexts/Loader'

export function useFormUtils(setShowModal) {
  const { passwordRecover } = useAuthenticationContext()
  const { logIn } = useAuthenticationContext()
  const { openLoader, closeLoader } = useLoader()

  const handleLogin = useCallback(
    async formData => {
      const { email, password } = formData
      openLoader()
      await logIn(email, password)
      closeLoader()
    },
    [openLoader, closeLoader, logIn]
  )

  const handlePasswordRecovery = useCallback(
    async ({ email }) => {
      openLoader()
      const response = await passwordRecover(email)
      closeLoader()
      if (response?.success) setShowModal(false)
    },
    [passwordRecover, openLoader, closeLoader, setShowModal]
  )

  return { handleLogin, handlePasswordRecovery }
}
