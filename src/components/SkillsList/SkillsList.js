import React from 'react'
import { getSkills } from '@/services'
import { useCollection } from 'react-firebase-hooks/firestore'

export function SkillsList() {
  const [skills, loading] = useCollection(getSkills())
  return (
    <div>
      <h2>Skills list</h2>
      {loading && <p>Carregando...</p>}
      <ul>
        {!loading &&
          skills.docs.map(skill => <li key={skill.id}>{skill.data().name}</li>)}
      </ul>
    </div>
  )
}
