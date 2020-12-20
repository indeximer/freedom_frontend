import React from 'react'
import { useAuthenticationContext } from '@/contexts/Authentication'

export function HomePage() {
  const { user, logOut } = useAuthenticationContext()

  return (
    <div>
      <p>Logado como: {user.email}</p>
      <button type="button" onClick={() => logOut()}>
        sair
      </button>
    </div>
  )
}
