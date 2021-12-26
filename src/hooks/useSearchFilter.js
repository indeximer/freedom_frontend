import { useState, useEffect, useCallback } from 'react'
import { deduplicateArray } from '@/utils'

export function useSearchFilter(collection) {
  const [results, setResults] = useState(collection)
  const [query, setQuery] = useState()

  const mapSearchParams = (param, collection, query) =>
    collection.filter(item => {
      const regex = RegExp(`${query.toLowerCase()}`)
      if (item?.[`${param}`].toLowerCase().match(regex)) return item
      return null
    })

  const paramsToArray = searchParams =>
    (searchParams && searchParams.split('|')) || []

  const searchItems = useCallback(
    (searchParams, searchQuery) => {
      if (!searchQuery || searchQuery === '') return setResults(collection)

      const searchParamsArray = paramsToArray(searchParams)
      const searchResultsCollection = searchParamsArray.map(param =>
        mapSearchParams(param, collection, searchQuery)
      )
      const searchResults = [].concat(...searchResultsCollection)

      setQuery(searchQuery)
      setResults(deduplicateArray(searchResults))
    },
    [setResults, collection, setQuery]
  )

  useEffect(() => {
    if (!query) searchItems()
  }, [query, searchItems])

  return { results, searchItems }
}
