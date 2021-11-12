import React, { useState, useEffect, useCallback } from 'react'
import { StoreContext } from './StoreContext'
import { useLoader } from '@/contexts/Loader'
import { useSkillsService, useTechniquesService } from '@/services'

export function StoreProvider({ children }) {
  const [store, setStore] = useState({})
  const { getSkills } = useSkillsService()
  const { getTechniques } = useTechniquesService()
  const { openLoader, closeLoader } = useLoader()

  const loadStore = useCallback(async () => {
    openLoader()
    const skillsResponse = await getSkills()
    const techniquesResponse = await getTechniques()
    setStore(store => ({
      ...store,
      skills: skillsResponse,
      techniques: techniquesResponse
    }))
    closeLoader()
  }, [openLoader, closeLoader, getSkills, getTechniques])

  useEffect(() => {
    loadStore()
  }, [loadStore])

  return (
    <StoreContext.Provider value={{ store, setStore, loadStore }}>
      {children}
    </StoreContext.Provider>
  )
}
