import { useState, useEffect, useCallback } from 'react'

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
      const searchResults = searchParamsArray.map(param =>
        mapSearchParams(param, collection, searchQuery)
      )

      setQuery(searchQuery)
      setResults(...searchResults)
    },
    [setResults, collection, setQuery]
  )

  useEffect(() => {
    if (!query) searchItems()
  }, [query, searchItems])

  return { results, searchItems }
}
