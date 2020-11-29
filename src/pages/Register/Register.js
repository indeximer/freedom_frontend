import React, { useState } from 'react'
import firebase from '@/config/firebase'
import 'firebase/auth'

export function RegisterPage() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const createUser = async () => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)
      alert('Usuario Cadastrado!')
    } catch (e) {
      alert(e)
    }
  }

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
        <button type="button" onClick={createUser}>
          Logar
        </button>
      </div>
    </form>
  )
}
