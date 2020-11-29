import React, { useState } from 'react'
import firebase from '@/config/firebase'
import 'firebase/auth'

export function PasswordRecoveryPage() {
  const [email, setEmail] = useState('')

  const passwordRecover = async () => {
    try {
      const response = await firebase.auth().sendPasswordResetEmail(email)
      alert('E-mail enviado')
    } catch (e) {
      alert(e)
    }
  }

  return (
    <form>
      <h1>Password Recovery</h1>
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={passwordRecover}>
          Enviar
        </button>
      </div>
    </form>
  )
}
