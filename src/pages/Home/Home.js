import React from 'react'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { SkillsCreator } from '@/containers/SkillsCreator'

export function HomePage() {
  return (
    <Container>
      <Header pageTitle="Home" />
      <p>Home content soon...</p>
      <SkillsCreator />
    </Container>
  )
}
