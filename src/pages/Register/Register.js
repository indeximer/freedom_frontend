import React, { useState } from 'react'
import { useAuthenticationContext } from '@/contexts/Authentication'

export function RegisterPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const { register } = useAuthenticationContext()

  return (
    <form>
      <h1>Cadastre-se</h1>
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
        <button type="button" onClick={() => register(email, senha)}>
          Logar
        </button>
      </div>
    </form>
  )
}
