import { createContext, useContext } from 'react'

export const AuthenticationContext = createContext()
export const useAuthenticationContext = () => useContext(AuthenticationContext)
