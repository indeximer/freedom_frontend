import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '@/config/firebase'
import 'firebase/auth'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const logar = async () => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
      alert('Usuario Logado')
    } catch (e) {
      alert(e)
    }
  }

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
        <button type="button" onClick={logar}>
          Logar
        </button>
      </div>
      <p>
        <Link to="/password-recovery">Recuperar senha</Link>
      </p>
    </form>
  )
}
