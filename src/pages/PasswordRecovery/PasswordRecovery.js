import React, { useState } from 'react'
import { useAuthenticationContext } from '@/contexts/Authentication'

export function PasswordRecoveryPage() {
  const [email, setEmail] = useState('')
  const { passwordRecover } = useAuthenticationContext()

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
        <button type="button" onClick={() => passwordRecover(email)}>
          Enviar
        </button>
      </div>
    </form>
  )
}
