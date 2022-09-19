import React from 'react'
import { CharacterContext } from './CharacterContext'

export function CharacterProvider({ children }) {
  return (
    <CharacterContext.Provider value={{}}>{children}</CharacterContext.Provider>
  )
}
