import React, { useState, useCallback } from 'react'
import { useStore } from '@/contexts/Store'
import { SkillsList } from '@/components/SkillsList'
import { FixedAddButton, SkillForm } from '@/components'
import { useFormSubmit } from './hooks/useFormSubmit'
import { orderBy } from '@/utils'

export function SkillsContainer() {
  const [openModal, setOpenModal] = useState(false)
  const [selectedSkill, setSelectedSkill] = useState(false)
  const { store } = useStore()
  const { submitSkill } = useFormSubmit(setOpenModal)

  const handleEditClick = useCallback(
    skill => {
      setSelectedSkill(skill)
      setOpenModal(true)
    },
    [setOpenModal, setSelectedSkill]
  )

  const handleCreateClick = useCallback(() => {
    setSelectedSkill(false)
    setOpenModal(true)
  }, [setOpenModal, setSelectedSkill])

  const sortedSkills = store?.skills
    ?.sort((a, b) => orderBy(a, b, 'name'))
    .map(skill => ({ ...skill, onEdit: () => handleEditClick(skill) }))

  return (
    <>
      <SkillsList skills={sortedSkills} />
      <FixedAddButton onClick={handleCreateClick} />
      <SkillForm
        open={openModal}
        handleClose={() => setOpenModal(false)}
        onSubmit={submitSkill}
        skill={selectedSkill}
      />
    </>
  )
}
