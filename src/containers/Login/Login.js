import React, { useEffect } from 'react'
import { useAuthenticationContext } from '@/contexts/Authentication'
import { Link } from 'react-router-dom'
import { useNavigation } from '@/hooks'
import { useLoader } from '@/contexts/Loader'
import { LoginForm } from '@/components/LoginForm'
import { AccessAreaContainer } from '@/components/AccessAreaContainer'
import Typography from '@material-ui/core/Typography'

export function LoginContainer() {
  const { logIn, isAuthenticated } = useAuthenticationContext()
  const { navigateTo } = useNavigation()
  const { openLoader, closeLoader } = useLoader()

  const handleLogin = async formData => {
    const { email, password } = formData
    openLoader()
    await logIn(email, password)
    closeLoader()
  }

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
      <Typography gutterBottom>
        <Link to="/password-recovery">Recuperar senha</Link>
      </Typography>
      <Typography>
        <Link to="/register">Ainda não tem uma conta? Registre-se!</Link>
      </Typography>
    </AccessAreaContainer>
  )
}
