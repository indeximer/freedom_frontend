import React, { useState, useCallback } from 'react'
import { SearchContext } from './SearchContext'

export function SearchProvider({ children }) {
  const [showSearch, setShowSearch] = useState(false)

  const openSearch = useCallback(() => {
    setShowSearch(true)
  }, [setShowSearch])

  const closeSearch = useCallback(() => {
    setShowSearch(false)
  }, [setShowSearch])

  return (
    <SearchContext.Provider
      value={{
        showSearch,
        openSearch,
        closeSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
