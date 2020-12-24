import React, { useState, useEffect } from 'react'
import { useAuthenticationContext } from '@/contexts/Authentication'
import { Link } from 'react-router-dom'
import { useNavigation } from '@/hooks'
import { useLoader } from '@/contexts/Loader'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const { logIn, isAuthenticated } = useAuthenticationContext()
  const { navigateTo } = useNavigation()
  const { openLoader, closeLoader } = useLoader()

  const handleLogin = async () => {
    openLoader()
    await logIn(email, senha)
    closeLoader()
  }

  useEffect(() => {
    if (isAuthenticated()) navigateTo('/')
  }, [isAuthenticated, navigateTo])

  return (
    <form>
      <h1>Login</h1>
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Senha: </label>
        <input
          type="password"
          name="password"
          onChange={e => setSenha(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={handleLogin}>
          Logar
        </button>
      </div>
      <p>
        <Link to="/password-recovery">Recuperar senha</Link>
      </p>
      <p>
        <Link to="/register">Ainda não tem uma conta? Registre-se!</Link>
      </p>
    </form>
  )
}
