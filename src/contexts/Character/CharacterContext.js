import { createContext, useContext } from 'react'

export const CharacterContext = createContext()
export const useCharacter = () => useContext(CharacterContext)
