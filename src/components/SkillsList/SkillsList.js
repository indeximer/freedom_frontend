import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSkillsService } from '@/services'

export function SkillsList() {
  const [skills, setSkills] = useState()
  const { getSkills } = useSkillsService()

  useEffect(() => {
    const loadSkills = async () => {
      const skillsResponse = await getSkills()
      setSkills(skillsResponse)
    }
    loadSkills()
  }, [setSkills, getSkills])

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
