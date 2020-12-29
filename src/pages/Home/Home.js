import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthenticationContext } from '@/contexts/Authentication'

export function HomePage() {
  const { user, logOut } = useAuthenticationContext()

  return (
    <div>
      <p>Logado como: {user.displayName}</p>
      <p>
        <Link to="/skills">Lista de Habilidades</Link>
      </p>
      <button type="button" onClick={() => logOut()}>
        sair
      </button>
    </div>
  )
}
