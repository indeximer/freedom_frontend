import React from 'react'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { TechniqueEditContainer } from '@/containers/TechniqueEdit'

export function TechniqueEditPage() {
  return (
    <Container>
      <Header pageTitle="Editar Técnica" />
      <TechniqueEditContainer />
    </Container>
  )
}
