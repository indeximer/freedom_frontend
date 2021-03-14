import React from 'react'

export function SkillsList({ skills }) {
  return (
    <ul>
      {skills && skills.map(skill => <li key={skill.id}>{skill.name}</li>)}
    </ul>
  )
}
