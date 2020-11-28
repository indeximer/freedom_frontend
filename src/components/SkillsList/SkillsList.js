import React from 'react'
import { getSkills } from '@/services'
import { useList } from 'react-firebase-hooks/database'

export function SkillsList() {
  const [skills, loading] = useList(getSkills())
  return (
    <div>
      <h2>Skills list</h2>
      {loading && <p>Carregando...</p>}
      <ul>
        {!loading &&
          skills.map(skill => <li key={skill.key}>{skill.val().name}</li>)}
      </ul>{' '}
    </div>
  )
}
