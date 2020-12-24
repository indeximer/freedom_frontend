import React, { useState, useCallback } from 'react'
import { LoaderContext } from './LoaderContext'
import { Loader } from '@/components/Loader'

export function LoaderProvider({ children }) {
  const [isLoading, setLoading] = useState(false)

  const openLoader = useCallback(() => {
    setLoading(true)
  }, [setLoading])

  const closeLoader = useCallback(() => {
    setLoading(false)
  }, [setLoading])

  return (
    <LoaderContext.Provider value={{ openLoader, closeLoader }}>
      {isLoading && <Loader />}
      {children}
    </LoaderContext.Provider>
  )
}
