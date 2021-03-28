import React from 'react'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { TechniqueCreateContainer } from '@/containers/TechniqueCreate'

export function TechniqueCreatePage() {
  return (
    <Container>
      <Header pageTitle="Criar Técnica" showSearchBtn={true} />
      <TechniqueCreateContainer />
    </Container>
  )
}
