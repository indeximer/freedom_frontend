import React, { useState, useEffect } from 'react'
import { useSkillsService } from '@/services'
import { useLoader } from '@/contexts/Loader'
import { SkillsList } from '@/components/SkillsList'

export function SkillsContainer() {
  const [skills, setSkills] = useState()
  const { getSkills } = useSkillsService()
  const { openLoader, closeLoader } = useLoader()

  useEffect(() => {
    const loadSkills = async () => {
      openLoader()
      const skillsResponse = await getSkills()
      setSkills(skillsResponse)
      closeLoader()
    }
    loadSkills()
  }, [setSkills, getSkills, openLoader, closeLoader])

  return <SkillsList skills={skills} />
}
