import React from 'react'
import { CharactersList } from '@/components/CharactersList'
import { FixedAddButton } from '@/components'
import { useNavigation } from '@/hooks'

export function CharactersContainer() {
  const { navigateTo } = useNavigation()

  return (
    <div>
      <CharactersList />
      <FixedAddButton onClick={() => navigateTo('/characters/create')} />
    </div>
  )
}
