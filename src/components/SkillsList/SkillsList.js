import React from 'react'
import { Content } from '@/components/Content'
import { SkillItem } from './partials/SkillItem'

export function SkillsList({ skills }) {
  return (
    <Content gutterBot={90}>
      {skills &&
        skills.map(skill => <SkillItem key={skill.id} skill={skill} />)}
    </Content>
  )
}
