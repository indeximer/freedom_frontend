import React, { useEffect } from 'react'
import { useAuthenticationContext } from '@/contexts/Authentication'
import { Link } from 'react-router-dom'
import { useNavigation } from '@/hooks'
import { useLoader } from '@/contexts/Loader'
import { LoginForm } from '@/components/LoginForm'

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
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} />
      <p>
        <Link to="/password-recovery">Recuperar senha</Link>
      </p>
      <p>
        <Link to="/register">Ainda não tem uma conta? Registre-se!</Link>
      </p>
    </>
  )
}
