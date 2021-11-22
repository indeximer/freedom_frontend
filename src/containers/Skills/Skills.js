import React, { useState, useCallback } from 'react'
import { useStore } from '@/contexts/Store'
import { useSearch } from '@/contexts/Search'
import { SkillsList } from '@/components/SkillsList'
import { FixedAddButton, SkillForm, SearchBar } from '@/components'
import { useFormSubmit } from './hooks/useFormSubmit'
import { ConfirmationModal } from '@/components/ConfirmationModal'
import { orderBy } from '@/utils'

export function SkillsContainer() {
  const [openModal, setOpenModal] = useState(false)
  const [openConfirmModal, setConfirmOpenModal] = useState(false)
  const [selectedSkill, setSelectedSkill] = useState(false)
  const { store } = useStore()
  const { showSearch, closeSearch } = useSearch()

  const { submitSkill, handleDeleteSkill } = useFormSubmit(setOpenModal)

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

  const handleDeleteModal = skill => {
    setSelectedSkill(skill)
    setConfirmOpenModal(true)
  }

  const handleConfirmDelete = useCallback(() => {
    handleDeleteSkill(selectedSkill?.id)
    setConfirmOpenModal(false)
  }, [selectedSkill, handleDeleteSkill, setConfirmOpenModal])

  const sortedSkills = store?.skills
    ?.sort((a, b) => orderBy(a, b, 'name'))
    .map(skill => ({
      ...skill,
      onEdit: () => handleEditClick(skill),
      onDelete: () => handleDeleteModal(skill)
    }))

  return (
    <>
      <SearchBar open={showSearch} onClose={closeSearch} />
      <SkillsList skills={sortedSkills} />
      <FixedAddButton onClick={handleCreateClick} />
      <SkillForm
        open={openModal}
        handleClose={() => setOpenModal(false)}
        onSubmit={submitSkill}
        skill={selectedSkill}
      />
      <ConfirmationModal
        open={openConfirmModal}
        title="Tem certeza de que deseja deletar a habilidade?"
        message="A remoção da habilidade é permanente e não poderá ser desfeita. Caso tenha dúvidas, clique em Cancelar."
        handleClose={() => setConfirmOpenModal(false)}
        handleConfirm={handleConfirmDelete}
      />
    </>
  )
}
