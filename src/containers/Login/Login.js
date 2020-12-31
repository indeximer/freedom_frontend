import React, { useState, useEffect, useCallback } from 'react'
import { useAuthenticationContext } from '@/contexts/Authentication'
import { Link } from 'react-router-dom'
import { useNavigation } from '@/hooks'
import { LoginForm } from '@/components/LoginForm'
import { AccessAreaContainer } from '@/components/AccessAreaContainer'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { PasswordRecoveryModal } from '@/components/PasswordRecoveryModal'
import { useFormUtils } from './hooks/useFormUtils'

export function LoginContainer() {
  const [showModal, setShowModal] = useState(false)
  const { isAuthenticated } = useAuthenticationContext()
  const { navigateTo } = useNavigation()
  const { handleLogin, handlePasswordRecovery } = useFormUtils(setShowModal)

  const handleModal = useCallback(() => setShowModal(!showModal), [
    setShowModal,
    showModal
  ])

  useEffect(() => {
    if (isAuthenticated()) navigateTo('/')
  }, [isAuthenticated, navigateTo])

  return (
    <AccessAreaContainer>
      <Typography variant="h2" gutterBottom color="primary">
        A aventura vai começar!
      </Typography>
      <Typography variant="subtitle2" paragraph>
        Acesse sua conta
      </Typography>
      <LoginForm onSubmit={handleLogin} />
      <Typography>
        <Button onClick={handleModal}>Recuperar senha</Button>
      </Typography>
      <Typography>
        <Link to="/register">Ainda não tem uma conta? Registre-se!</Link>
      </Typography>
      <PasswordRecoveryModal
        onSubmit={handlePasswordRecovery}
        open={showModal}
        handleClose={handleModal}
      />
    </AccessAreaContainer>
  )
}
