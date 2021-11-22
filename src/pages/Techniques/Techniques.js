import React from 'react'
import { Header } from '@/components/Header'
import { SearchProvider, useSearch } from '@/contexts/Search'
import { TechniquesContainer } from '@/containers/Techniques'
import { Container } from '@/components/Container'

function SearchConsumer() {
  const { openSearch } = useSearch()

  return (
    <Container>
      <Header
        pageTitle="Técnicas"
        showSearchBtn={true}
        openSearch={openSearch}
      />
      <TechniquesContainer />
    </Container>
  )
}

export function TechniquesPage() {
  return (
    <SearchProvider>
      <SearchConsumer />
    </SearchProvider>
  )
}
