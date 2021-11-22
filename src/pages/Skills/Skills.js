import React from 'react'
import { Header } from '@/components/Header'
import { SkillsContainer } from '@/containers/Skills'
import { SearchProvider, useSearch } from '@/contexts/Search'
import { Container } from '@/components/Container'

function SearchConsumer() {
  const { openSearch } = useSearch()

  return (
    <Container>
      <Header
        pageTitle="Habilidades"
        showSearchBtn={true}
        openSearch={openSearch}
      />
      <SkillsContainer />
    </Container>
  )
}

export function SkillsPage() {
  return (
    <SearchProvider>
      <SearchConsumer />
    </SearchProvider>
  )
}
