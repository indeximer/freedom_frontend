import React from 'react'
import { Content } from '@/components/Content'
import { SkillItem } from './partials/SkillItem'
import { SearchBar } from '@/components'

export function SkillsList({ skills }) {
  return (
    <Content gutterBot={90}>
      <SearchBar />
      {skills &&
        skills.map(skill => <SkillItem key={skill.id} skill={skill} />)}
    </Content>
  )
}
