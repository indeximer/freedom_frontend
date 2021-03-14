import React, { useCallback } from 'react'
import Button from '@material-ui/core/Button'
import { skillsToCreate } from './skills'
import { useSkillsService } from '@/services'
import { useLoader } from '@/contexts/Loader'

export function SkillsCreator() {
  const { createSkill } = useSkillsService()
  const { openLoader, closeLoader } = useLoader()

  const sendSkills = useCallback(async () => {
    openLoader()
    await skillsToCreate.map(async skill => {
      await createSkill(skill)
    })
    closeLoader()
  }, [openLoader, closeLoader, createSkill])

  return (
    <>
      <Button variant="contained" onClick={sendSkills}>
        Criar Skills
      </Button>
    </>
  )
}
