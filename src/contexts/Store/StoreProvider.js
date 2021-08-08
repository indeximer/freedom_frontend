import React, { useState, useEffect } from 'react'
import { StoreContext } from './StoreContext'
import { useLoader } from '@/contexts/Loader'
import { useSkillsService, useTechniquesService } from '@/services'

export function StoreProvider({ children }) {
  const [store, setStore] = useState({})
  const { getSkills } = useSkillsService()
  const { getTechniques } = useTechniquesService()
  const { openLoader, closeLoader } = useLoader()

  useEffect(() => {
    const loadData = async () => {
      openLoader()
      const skillsResponse = await getSkills()
      const techniquesResponse = await getTechniques()
      setStore(store => ({
        ...store,
        skills: skillsResponse,
        techniques: techniquesResponse
      }))
      closeLoader()
    }
    loadData()
  }, [openLoader, closeLoader, setStore, getSkills, getTechniques])

  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {children}
    </StoreContext.Provider>
  )
}
