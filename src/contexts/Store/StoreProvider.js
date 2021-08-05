import React, { useState, useEffect } from 'react'
import { StoreContext } from './StoreContext'
import { useLoader } from '@/contexts/Loader'
import { useSkillsService } from '@/services'

export function StoreProvider({ children }) {
  const [store, setStore] = useState({})
  const { getSkills } = useSkillsService()
  const { openLoader, closeLoader } = useLoader()

  useEffect(() => {
    const loadSkills = async () => {
      openLoader()
      const skillsResponse = await getSkills()
      setStore(store => ({ ...store, skills: skillsResponse }))
      closeLoader()
    }
    loadSkills()
  }, [openLoader, closeLoader, setStore, getSkills])

  return (
    <StoreContext.Provider value={{ store, setStore }}>
      {children}
    </StoreContext.Provider>
  )
}
