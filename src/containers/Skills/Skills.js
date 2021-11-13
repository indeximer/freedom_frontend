import React, { useState } from 'react'
import { useStore } from '@/contexts/Store'
import { SkillsList } from '@/components/SkillsList'
import { FixedAddButton, SkillForm } from '@/components'
import { useFormSubmit } from './hooks/useFormSubmit'

export function SkillsContainer() {
  const [openModal, setOpenModal] = useState(false)
  const { store } = useStore()
  const { submitSkill } = useFormSubmit()

  return (
    <>
      <SkillsList skills={store.skills} />
      <FixedAddButton onClick={() => setOpenModal(true)} />
      <SkillForm
        open={openModal}
        handleClose={() => setOpenModal(false)}
        onSubmit={submitSkill}
      />
    </>
  )
}
