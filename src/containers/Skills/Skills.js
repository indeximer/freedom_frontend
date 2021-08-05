import React from 'react'
import { useStore } from '@/contexts/Store'
import { SkillsList } from '@/components/SkillsList'

export function SkillsContainer() {
  const { store } = useStore()

  return <SkillsList skills={store.skills} />
}
