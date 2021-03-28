import React from 'react'
import { Header } from '@/components/Header'
import { TechniquesContainer } from '@/containers/Techniques'
import { Container } from '@/components/Container'

export function TechniquesPage() {
  return (
    <Container>
      <Header pageTitle="Técnicas" showSearchBtn={true} />
      <TechniquesContainer />
    </Container>
  )
}
