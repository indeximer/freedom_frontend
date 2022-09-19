import React from 'react'
import { CharacterProvider } from '@/contexts/Character'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { CharacterCreateContainer } from '@/containers/CharacterCreate'

export function CharacterCreatePage() {
  return (
    <CharacterProvider>
      <Container>
        <Header pageTitle="Criação de Personagem" />
        <CharacterCreateContainer />
      </Container>
    </CharacterProvider>
  )
}
