import React from 'react'
import { Header } from '@/components/Header'
import { SearchProvider, useSearchContext } from '@/contexts/Search'
import { Container } from '@/components/Container'
import { CharactersContainer } from '@/containers/Characters'

function SearchConsumer() {
  const { openSearch } = useSearchContext()

  return (
    <Container>
      <Header
        pageTitle="Personagens"
        showSearchBtn={true}
        openSearch={openSearch}
      />
      <CharactersContainer />
    </Container>
  )
}

export function CharactersPage() {
  return (
    <SearchProvider>
      <SearchConsumer />
    </SearchProvider>
  )
}
