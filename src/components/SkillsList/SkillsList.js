import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSkillsService } from '@/services'
import { useLoader } from '@/contexts/Loader'

export function SkillsList() {
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

  return (
    <div>
      <h2>Skills list</h2>
      <ul>
        {skills && skills.map(skill => <li key={skill.id}>{skill.name}</li>)}
      </ul>
      <Link to="/">Voltar</Link>
    </div>
  )
}
