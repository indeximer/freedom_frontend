import React from 'react'
import { Header } from '@/components/Header'
import { SkillsContainer } from '@/containers/Skills'
import { Container } from '@/components/Container'

export function SkillsPage() {
  return (
    <Container>
      <Header pageTitle="Habilidades" showSearchBtn={true} />
      <SkillsContainer />
    </Container>
  )
}
